import { deleteListing, getAllListings, getAllMerchantListings, getListing, ListingCreate, updateListing } from '../controllers/listings'
import express from 'express'
import { isAuthenticated, isListingOwner, isOnBooking } from '../middlewares'
import { getAllMessages, MessageCreate } from '../controllers/messages'

export default (router: express.Router) => {
    router.post('/api/messages', isAuthenticated, MessageCreate)
    router.get('/api/messages/:id', isAuthenticated, isOnBooking, getAllMessages)
}