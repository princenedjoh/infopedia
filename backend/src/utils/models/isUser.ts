import userSchema from "../../models/usersModel"

const isUser = async (userID : string) => {
    const user = await userSchema.findOne(
        {
            _id : userID
        }
    )
    if(user) return true
    return false
}

export default isUser