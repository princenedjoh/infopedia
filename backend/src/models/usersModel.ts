import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        "firstName" : String,
        "lastName" : String,
        "password" : String,
        "email" : String,
        "gender" : String,
        "dateCreated" : Date,
        "profilePicture" : String
    }
)


export default mongoose.model('userSchema', userSchema)