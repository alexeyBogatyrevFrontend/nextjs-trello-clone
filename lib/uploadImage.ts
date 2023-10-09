import { ID, storage } from '@/appwriter'

const uploadImage = async (file: File) => {
	if (!file) return

	const fileUploaded = await storage.createFile(
		'651a965aa4c888a6b9dd',
		ID.unique(),
		file
	)

	return fileUploaded
}

export default uploadImage
