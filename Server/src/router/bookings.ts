import express from 'express'
import { isAuthenticated, isBookingOwner, isOnBooking } from '../middlewares'
import { bookingCreate, deleteBooking, getAllBookingsByMerchant, getAllMyBookings, getBooking, updateBooking } from '../controllers/bookings'

export default (router: express.Router) => {
    router.post('/api/bookings', isAuthenticated, bookingCreate)
    router.get("/api/bookings/:id", isAuthenticated, isOnBooking, getBooking)
    router.get('/api/bookings/my/:id', isAuthenticated, getAllMyBookings)
    router.get('/api/bookings/merchant/:id', isAuthenticated, getAllBookingsByMerchant)
    router.delete('/api/bookings/:id', isAuthenticated, isBookingOwner, deleteBooking)
    router.patch('/api/bookings/:id', isAuthenticated, isOnBooking, updateBooking)
}