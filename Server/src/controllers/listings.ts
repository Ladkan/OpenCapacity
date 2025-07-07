import express from "express";
import { createListing, deleteListingById, getListingById, getListings, getMerchantListings, updateListingById } from "../db/listings";

export const ListingCreate = async (req:express.Request, res: express.Response) => {
    try{
        const {title, description, category, location, available_from, available_to, price_per_hour, user_id} = req.body
    
        if(!title || !description || !category || !location || !available_from || !available_to || !price_per_hour || !user_id)
            return res.sendStatus(400)

        const today = Date.now()

        const listing = await createListing({
            user_id,
            title,
            description,
            category,
            location,
            available_from,
            available_to,
            price_per_hour,
            created: today
        })

        return res.status(200).json(listing).end()

    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getAllListings = async (req: express.Request, res: express.Response) => {
    try{
        const listing = await getListings()

        return res.status(200).json(listing)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteListing = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params

        const deletedListing = await deleteListingById(id)

        return res.json(deletedListing)
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getListing = async (req: express.Request, res:  express.Response) => {
        try{
        const {id} = req.params
        const listing = await getListingById(id)

        if(!listing)
            return res.sendStatus(404)

        return res.status(200).json(listing)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const updateListing = async (req: express.Request, res: express.Response) => {
    try{
        const {body, params: {id}} = req
    
        if(!id)
            return res.sendStatus(400)

        let listing = await getListingById(id)

        if(!listing)
            return res.sendStatus(404)

        const updated = await updateListingById(id,{$set: body})

        return res.status(200).json(updated)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getAllMerchantListings = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params
        const listing = await getMerchantListings(id)

        return res.status(200).json(listing)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}