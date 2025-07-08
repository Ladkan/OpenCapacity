import { getAllUsers, userCheck } from '../controllers/users'
import express from 'express'
import { isAuthenticated } from '../middlewares'

export default (router: express.Router) => {
    router.get("/api/users", getAllUsers, isAuthenticated)
    router.get("/api/user", userCheck)
}