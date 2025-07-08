import { getUserBySessionToken, getUsers } from '../db/users'
import express from 'express'

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try{

        const users = await getUsers()

        return res.status(200).json(users)
    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const userCheck = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const sessionToken = req.cookies['AUTH']

        if(!sessionToken)
            return res.status(403).json(false)

        const existingUser = await getUserBySessionToken(sessionToken)

        if(!existingUser)
            return res.status(403).send(false)
        
        return res.status(200).json(existingUser)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}