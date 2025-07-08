import express from 'express'
import { isAuthenticated, isDetailOwner } from '../middlewares'
import { deleteDetail, DetailCreate, getDetail, updateDetail } from '../controllers/listingdetails'

export default (router: express.Router) => {
    router.post('/api/details', isAuthenticated, DetailCreate)
    router.get('/api/details/:id', getDetail)
    router.delete('/api/details/:id', isAuthenticated, isDetailOwner, deleteDetail)
    router.patch('/api/details/:id', isAuthenticated, isDetailOwner, updateDetail)
}