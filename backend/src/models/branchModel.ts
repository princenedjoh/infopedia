import mongoose from "mongoose"

const branchSchema = new mongoose.Schema(
    {
        'branchName': String,
    }
)


export default mongoose.model('branchSchema', branchSchema)