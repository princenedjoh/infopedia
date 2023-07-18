import mongoose from "mongoose"

const testHistorySchema = new mongoose.Schema(
    {
        "userID" : String,
        "questions" : [{
            "questionID" : String,
            "chosenAnswer" : String
        }],
    }
)


export default mongoose.model('testHistorySchema', testHistorySchema)