import courseSchema from "../../models/coursesModel"

const isCourse = async (courseID : string) => {
    const course = await courseSchema.findOne(
        {
            _id : courseID
        }
    )
    if(course) return true
    return false
}

export default isCourse