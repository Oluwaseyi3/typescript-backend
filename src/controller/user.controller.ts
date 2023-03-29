import {Request, Response} from "express"
import { createUser } from "../service/user.service"
import logger from "../utils/logger"

export async function createUserhandler(req, res){
try {
    const user = await createUser(req.body) 
    return user;//call create user service
} catch (e) {
    logger.error(e)
    return res.status(409).send(e.message)
}
}