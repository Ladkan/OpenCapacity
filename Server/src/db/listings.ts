import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "users", required: true},
    cover: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId,ref: "categories", required: true},
    location: {type: String, required: true},
    available_from: {type: Date, required: true},
    available_to: {type: Date, required: true},
    price_per_hour: {type: Number, required: true},
    created: {type: Date, required: true}
})

export const ListingModel = mongoose.model('listings', listingSchema)

export const getListings = () => ListingModel.find().populate("user_id").populate('category').exec()
export const getListingById = (id:string) => ListingModel.findById(id).populate("user_id").populate('category').exec()
export const createListing = (values: Record<string,any>) => new ListingModel(values).save().then((listing) => listing.toObject())
export const updateListingById = (id: string, values: Record<string,any>) => ListingModel.findByIdAndUpdate(id,values)  
export const deleteListingById = (id:string) => ListingModel.findByIdAndDelete(id)
//export const getMerchantListings = (id:string) => ListingModel.find({$where: function() { return this.user_id === id }})
export const getMerchantListings = (user_id:string) => ListingModel.find({user_id}).populate("user_id").populate('category').exec()