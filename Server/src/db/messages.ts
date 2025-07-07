import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "users", required: true},
    booking_id: {type: mongoose.Schema.Types.ObjectId,ref: "bookings", required: true},
    message: {type: String, required: true},
    created: {type: Date}
})

export const MessageModel = mongoose.model('messages', messagesSchema)
export const getBookingMessages = (booking_id:string) => MessageModel.find({booking_id}).populate('user_id').populate('booking_id').exec()
//export const getBookingMessages = (id:string) => MessageModel.find({$where: function() {return this.booking_id === id}})
export const createMessage = (values: Record<string,any>) => new MessageModel(values).save().then((message) => message.toObject())
export const deleteMessageById = (id:string) => MessageModel.findByIdAndDelete(id)
