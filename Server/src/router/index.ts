import express from 'express'
import authentication from './authentication'
import users from './users'
import listings from './listings'
import categories from './categories'
import messages from './messages'
import bookings from './bookings'
import details from './details'

const router = express.Router()

export default (): express.Router => {

    authentication(router)
    users(router)
    listings(router)
    categories(router)
    bookings(router)
    messages(router)
    details(router)

    return router
}