import { getAllCategories } from '../controllers/categories'
import express from 'express'

export default (router: express.Router) => {
    router.get('/api/categories', getAllCategories)
}