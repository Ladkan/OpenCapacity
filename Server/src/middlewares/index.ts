import express from 'express'
import {get, identity, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users'
import { getListingById } from '../db/listings'
import { getBookingById } from '../db/bookings'
import { console } from 'inspector'
import { getDetailById } from '../db/listingdetails'

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const sessionToken = req.cookies['AUTH']

        if(!sessionToken)
            return res.sendStatus(403)

        const existingUser = await getUserBySessionToken(sessionToken)

        if(!existingUser)
            return res.sendStatus(403)

        merge(req, {identity: existingUser})

        return next()

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}


export const isListingOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    
         const {id} = req.params
         const listing = await getListingById(id)
        
        if(!listing)
            return res.status(400).json({"message":"Not valid listing"})

         const currentUserId = get(req, 'identity._id') as string

         if(!currentUserId)
            return res.status(400).json({"message":"Cannot get current user"})

         if(currentUserId.toString() != listing.user_id.toString())
            return res.status(400).json({"message":"User is not owner of this listing"})

         next()

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const isDetailOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    
         const {id} = req.params
         const detail = await getDetailById(id)
        
        if(!detail)
            return res.status(400).json({"message":"Not valid detail"})

         const currentUserId = get(req, 'identity._id') as string

         if(!currentUserId)
            return res.status(400).json({"message":"Cannot get current user"})

         if(currentUserId.toString() != detail.user_id.toString())
            return res.status(400).json({"message":"User is not owner of this detail"})

         next()

    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const isOnBooking = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const {id} = req.params
        const booking = await getBookingById(id)

        if(!booking)
            return res.status(400).json({"message":"Not valid booking"})

        const currentUserId = get(req, 'identity._id') as string

        if(!currentUserId)
            return res.status(400).json({"message":"Cannot get current user"})

        if(currentUserId.toString() != booking.user_id.id.toString() && currentUserId.toString() != booking.merchant_id.id.toString())
            return res.status(400).json({"message":"Not valid user"})

        next()

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const isBookingOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const {id} = req.params
        const booking = await getBookingById(id)

        if(!booking)
            return res.sendStatus(400)

        const currentUserId = get(req, 'identity._id') as string

        if(!currentUserId)
            return res.sendStatus(400)

        if(currentUserId.toString() != booking.user_id.toString())
            return res.sendStatus(400)

        next()

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}