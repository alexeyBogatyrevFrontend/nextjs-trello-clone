import { ID, databases, storage } from '@/appwriter'
import Board from '@/components/Board'
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn'
import uploadImage from '@/lib/uploadImage'

import { create } from 'zustand'

interface BoardState {
	board: Board
	getBoard: () => void
	setBoardState: (board: Board) => void
	updateTodoInDb: (todo: Todo, columnId: TypedColumn) => void

	searchString: string
	setSearchString: (searchString: string) => void

	newTaskInput: string
	setNewTaskInput: (input: string) => void

	newTaskType: TypedColumn
	setNewTaskType: (columnId: TypedColumn) => void

	image: File | null
	setImage: (image: File | null) => void

	addTask: (todo: string, columndId: TypedColumn, image?: File | null) => void

	deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void
}

export const useBoardStore = create<BoardState>(set => ({
	board: {
		columns: new Map<TypedColumn, Column>(),
	},

	searchString: '',
	setSearchString: searchString => set({ searchString }),
	getBoard: async () => {
		const board = await getTodosGroupedByColumn()
		set({ board })
	},

	newTaskInput: '',
	setNewTaskInput: (input: string) => set({ newTaskInput: input }),

	newTaskType: 'todo',
	setNewTaskType: (columndId: TypedColumn) => set({ newTaskType: columndId }),

	image: null,
	setImage: (image: File | null) => set({ image }),

	setBoardState: board => set({ board }),

	deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
		const newColumns = new Map(useBoardStore.getState().board.columns)

		// delete todoId from newColumns
		newColumns.get(id)?.todos.splice(taskIndex, 1)

		set({ board: { columns: newColumns } })

		if (todo.image) {
			await storage.deleteFile(todo.image.bucketId, todo.image.fileId)
		}

		await databases.deleteDocument(
			process.env.NEXT_PUBLIC_DATABASE_ID!,
			process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
			todo.$id
		)
	},

	updateTodoInDb: async (todo, columnId) => {
		await databases.updateDocument(
			process.env.NEXT_PUBLIC_DATABASE_ID!,
			process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
			todo.$id,
			{
				title: todo.title,
				status: columnId,
			}
		)
	},

	addTask: async (todo: string, columnId: TypedColumn, image?: File | null) => {
		let file: Image | undefined

		if (image) {
			const fileUploaded = await uploadImage(image)
			if (fileUploaded) {
				file = {
					bucketId: fileUploaded.bucketId,
					fileId: fileUploaded.$id,
				}
			}
		}

		const { $id } = await databases.createDocument(
			process.env.NEXT_PUBLIC_DATABASE_ID!,
			process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
			ID.unique(),
			{
				title: todo,
				status: columnId,
				// include image if it exists
				...(file && { image: JSON.stringify(file) }),
			}
		)

		set({ newTaskInput: '' })

		set(state => {
			const newColumns = new Map(state.board.columns)

			const newTodo: Todo = {
				$id,
				$createdAt: new Date().toISOString(),
				title: todo,
				status: columnId,
				// include image if it exists
				...(file && { image: file }),
			}

			const column = newColumns.get(columnId)

			if (!column) {
				newColumns.set(columnId, {
					id: columnId,
					todos: [newTodo],
				})
			} else {
				newColumns.get(columnId)?.todos.push(newTodo)
			}

			return {
				board: {
					columns: newColumns,
				},
			}
		})
	},
}))
