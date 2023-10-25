import mongoose from "mongoose"

const supervisorSchema = new mongoose.Schema(
    {
        'userID': String,
    }
)


export default mongoose.model('supervisorSchema', supervisorSchema)