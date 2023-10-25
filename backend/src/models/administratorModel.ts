import mongoose from "mongoose"

const adminSchema = new mongoose.Schema(
    {
        'userID': String,
    }
)


export default mongoose.model('adminSchema', adminSchema)