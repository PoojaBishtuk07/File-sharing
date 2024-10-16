import { request } from "express"
import File from "../model/fileModel.js"
export const uploadImage = async (request, response )=>{
    const fileObj={
        path: request.file.path,
        name:request.file.originalname
    }
try{
const file = await File.create(fileObj)
response.status(200).json({path:`http://localhost:8000/file/${file._id}`})
}
catch(err){
    console.error(err.message)
     response.status(500).json({
        err:err.message
    })
}

}
export const  downloadImage = async (request, response)=>{
    try
        {
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save()
        response.download(file.path, file.name)
        }
catch(err){
    console.error(err.message)
    return response.status(500).json({
        err:err.message
    })
}
}