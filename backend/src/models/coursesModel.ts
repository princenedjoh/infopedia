import mongoose from "mongoose"

const coursesSchema = new mongoose.Schema(
    {
        "name": String,
        "programID" : String
    }
)


export default mongoose.model('coursesSchema', coursesSchema)