import type { HttpContext } from '@adonisjs/core/http'
import { uploadCsvValidator } from '#validators/csv_files'
import FilesUploadService from '#services/files_upload_service'

export default class FileUploadsController {

    public async store({ request, response }: HttpContext) {

        const { csv } = await request.validateUsing(uploadCsvValidator)
        const success = await FilesUploadService.store(csv)

        if (success){
            return response.ok({ message: 'File uploaded successfully', csv })
        }else{
            return response.badRequest({ message: 'File upload failed' })
        }
    }
}