import mongoose from "mongoose"

const questionSchema = new mongoose.Schema(
    {
        "question" : String,
        "possibleAnswers" : [String],
        "answer" : String,
        "editorID" : String,
        "explanation" : String,
        "programsID" : [{
            "type" : String,
            "ref" : 'programSchema'
        }],
        "coursesID" : [{
            "type" : String,
            "ref" : 'coursesSchema'
        }],
        "topicsID" : [{
            "type" : String,
            "ref" : 'coursesSchema'
        }]
    }
)


export default mongoose.model('questionSchema', questionSchema)