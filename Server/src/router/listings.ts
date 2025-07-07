import { deleteListing, getAllListings, getAllMerchantListings, getListing, ListingCreate, updateListing } from '../controllers/listings'
import express from 'express'
import { isAuthenticated, isListingOwner } from '../middlewares'

export default (router: express.Router) => {
    router.post('/api/listings', isAuthenticated, ListingCreate)
    router.get('/api/listings', getAllListings)
    router.get('/api/listings/:id', getListing)
    router.get('/api/listings/merchant/:id', getAllMerchantListings)
    router.delete('/api/listings/:id', isAuthenticated, isListingOwner, deleteListing)
    router.patch('/api/listings/:id', isAuthenticated, isListingOwner, updateListing)
}