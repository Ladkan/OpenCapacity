import express from "express";
import { createMessage, deleteMessageById, getBookingMessages } from "../db/messages";

export const MessageCreate = async (req:express.Request, res: express.Response) => {
    try{
        const {user_id, booking_id, message} = req.body
    
        if(!booking_id || !message || !user_id)
            return res.sendStatus(400)

        const today = Date.now()

        const mesasge = await createMessage({
            user_id,
            booking_id,
            message,
            created: today
        })

        return res.status(200).json(mesasge).end()

    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getAllMessages = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params
        const messages = await getBookingMessages(id)

        return res.status(200).json(messages)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteMessage = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params

        const deletedmessage = await deleteMessageById(id)

        return res.json(deletedmessage)
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}
