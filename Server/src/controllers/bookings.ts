import { createBooking, deleteBookingById, getBookingById, getBookingsByMerchant, getBookingsByMyId, updateBookingById } from "../db/bookings";
import express from "express";

export const getAllBookingsByMerchant = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params
        const bookings = await getBookingsByMerchant(id)

        return res.status(200).json(bookings)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getAllMyBookings = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params
        const bookings = await getBookingsByMyId(id)

        return res.status(200).json(bookings)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const bookingCreate = async (req: express.Request, res: express.Response) => {
    try{
        const {user_id,listing_id,merchant_id,start_date,end_date} = req.body
        if(!user_id || !listing_id || !merchant_id || !start_date || !end_date)
            return res.sendStatus(400)

        const today = Date.now()
        const booking = await createBooking({
            user_id,
            listing_id,
            merchant_id,
            start_date,
            end_date,
            status: 'pending',
            created: today
        })

        return res.status(200).json(booking).end()

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const getBooking = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params
        const bookings = await getBookingById(id)

        return res.status(200).json(bookings)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteBooking = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params

        const deletedListing = await deleteBookingById(id)

        return res.json(deletedListing)
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const updateBooking = async (req: express.Request, res: express.Response) => {
    try{
        const {body, params: {id}} = req
    
        if(!id)
            return res.sendStatus(400)

        let listing = await getBookingById(id)

        if(!listing)
            return res.sendStatus(404)

        const updated = await updateBookingById(id,{$set: body})

        return res.status(200).json(updated)

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}