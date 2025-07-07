import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "users", required: true},
    listing_id: {type: mongoose.Schema.Types.ObjectId,ref: "listings", required: true},
    merchant_id: {type: mongoose.Schema.Types.ObjectId,ref: "users", required: true},
    start_date: {type: Date, required: true},
    end_date:  {type: Date, required: true},
    status: {type: String},
    created: {type: Date}
})

export const BookingModel = mongoose.model('bookings', bookingSchema)

//export const getBookingsByMerchant = (id:string) => BookingModel.find({ $where: function() { return this.merchant_id === id } })
export const getBookingsByMerchant = (merchant_id:string) => BookingModel.find({merchant_id}).populate('user_id').populate('merchant_id').populate('listing_id').exec()
export const getBookingsByMyId = (user_id:string) => BookingModel.find({user_id}).populate('user_id').populate('merchant_id').populate('listing_id').exec()
export const getBookingById = (id:string) => BookingModel.findById(id).populate('user_id').populate('merchant_id').populate('listing_id').exec()
//export const getBookingsByMyId = (id:string) => BookingModel.find({$where: function() {return this.user_id === id}})
export const createBooking = (values: Record<string,any>) => new BookingModel(values).save().then((booking) => booking.toObject())
export const updateBookingById = (id: string, values: Record<string,any>) => BookingModel.findByIdAndUpdate(id,values)  
export const deleteBookingById = (id:string) => BookingModel.findByIdAndDelete(id)