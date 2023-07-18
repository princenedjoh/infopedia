import mongoose from "mongoose"

const programSchema = new mongoose.Schema(
    {
        "programName": String,
        "BranchID" : String,
    }
)


export default mongoose.model('programSchema', programSchema)