import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type Props = {
	id: TypedColumn
	todos: Todo[]
	index: number
}

const idToColumnText: {
	[key in TypedColumn]: string
} = {
	todo: 'To Do',
	inprogress: 'In Progress',
	done: 'done',
}

const Column = ({ id, todos, index }: Props) => {
	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{/* render droppable todos in the column */}
					<Droppable droppableId={index.toString()} type='card'>
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={`pb-2 rounded-2xl shadow-sm ${
									snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
								}`}
							>
								<h2 className='flex justify-between font-bold text-xl'>
									{idToColumnText[id]}
									<span className='text-gray-500 bg-gray-200 rounded-full px-2 py-2 text-sm'>
										{todos.length}
									</span>
								</h2>
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	)
}

export default Column
