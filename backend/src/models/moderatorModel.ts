import mongoose from "mongoose"

const moderatorSchema = new mongoose.Schema(
    {
        'userID': String,
    }
)


export default mongoose.model('moderatorSchema', moderatorSchema)