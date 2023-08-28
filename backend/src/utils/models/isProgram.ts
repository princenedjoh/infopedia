import programsSchema from "../../models/programsModel"

const isProgram = async (programID : string) => {
    const program = await programsSchema.findOne(
        {
            _id : programID
        }
    )
    if(program) return true
    return false
}

export default isProgram