import mongoose from "mongoose"

const questionSchema = new mongoose.Schema(
    {
        "question" : String,
        "possibleAnswers" : [String],
        "answer" : String,
        "editorID" : String
    }
)


export default mongoose.model('questionSchema', questionSchema)