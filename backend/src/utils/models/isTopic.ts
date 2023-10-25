import topicSchema from "../../models/topicsModel"

const isTopic = async (topicID : string) => {
    const topic = await topicSchema.findOne(
        {
            _id : topicID
        }
    )
    if(topic) return true
    return false
}

export default isTopic