import { createDetail, deleteDetailById, getDetails, updateDetailById } from "../db/listingdetails";
import express from "express";

export const DetailCreate = async (req: express.Request, res: express.Response) => {
    try{
        const { user_id, listing_id, setup_fee, rush_order_fee, volume_discounts, materials, specs } = req.body

        if(!user_id || !listing_id)
            return res.sendStatus(400)

        const detail = await createDetail({
            user_id,
            listing_id,
            setup_fee,
            rush_order_fee,
            volume_discounts,
            materials,
            specs
        })

        return res.status(200).json(detail).end()

    } catch (error){
        console.log(error)
        res.sendStatus(400)
    }
}

export const getDetail = async (req: express.Request, res: express.Response) =>{
    try{
        const {id} = req.params

        const detail = await getDetails(id)
        return res.status(200).json(detail)
    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteDetail = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params

        const deletedDetail = await deleteDetailById(id)

        return res.json(deletedDetail)
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const updateDetail = async (req: express.Request, res: express.Response) => {
    try{
        const {body, params: {id}} = req
    
        if(!id)
            return res.sendStatus(400)

        let listing = await getDetails(id)

        if(!listing)
            return res.sendStatus(404)

        const updated = await updateDetailById(id,{$set: body})

        return res.status(200).json(updated)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}