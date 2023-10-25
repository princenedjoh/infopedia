import mongoose from "mongoose"

const topicsSchema = new mongoose.Schema(
    {
        "name": String,
        "courseID" : String
    }
)


export default mongoose.model('topicsSchema', topicsSchema)