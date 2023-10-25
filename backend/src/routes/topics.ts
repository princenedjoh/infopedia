import { Router } from "express";
import { authentication } from "../auth/authentication";
import { addTopic } from "../controllers/topics/add";
import { getTopic, getAllTopics} from "../controllers/topics/get"
import { deleteTopic } from "../controllers/topics/delete"

export const topicRoute = Router()

topicRoute.post('/add', addTopic)
topicRoute.get('/getTopic', getTopic)
topicRoute.get('/getAllTopics', getAllTopics)
topicRoute.delete('/delete', deleteTopic)