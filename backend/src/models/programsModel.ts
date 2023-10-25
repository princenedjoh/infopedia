import mongoose from "mongoose"

const programSchema = new mongoose.Schema(
    {
        "programName": String,
        "branchID" : String,
    }
)


export default mongoose.model('programSchema', programSchema)