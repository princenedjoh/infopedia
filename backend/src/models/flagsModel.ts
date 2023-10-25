import mongoose from "mongoose"

const flagsSchema = new mongoose.Schema(
    {
        "questionID" : String,
        "userID" : String,
        "issue" : String,
        "suggestedAnswer" : String,
        "comment" : String,
        "resolved" : Boolean,
        "EditorID" : String
    }
)


export default mongoose.model('flagsSchema', flagsSchema)