import { getCatagories } from '../db/categories'
import express from 'express'

export const getAllCategories = async (req: express.Request, res: express.Response) => {
    try{

        const users = await getCatagories()

        return res.status(200).json(users)
    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}