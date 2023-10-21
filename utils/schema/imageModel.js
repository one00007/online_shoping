import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    filename: String,
    data: Buffer
})

const ImageModel = mongoose.models.imagemodel || mongoose.model("imagemodel", ImageSchema)

export default ImageModel