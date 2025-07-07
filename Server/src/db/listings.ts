import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    cover: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    location: {type: String, required: true},
    available_from: {type: Date, required: true},
    available_to: {type: Date, required: true},
    price_per_hour: {type: Number, required: true},
    created: {type: Date, required: true}
})

export const ListingModel = mongoose.model('listings', listingSchema)

export const getListings = () => ListingModel.find()
export const getListingById = (id:string) => ListingModel.findById(id)
export const createListing = (values: Record<string,any>) => new ListingModel(values).save().then((listing) => listing.toObject())
export const updateListingById = (id: string, values: Record<string,any>) => ListingModel.findByIdAndUpdate(id,values)  
export const deleteListingById = (id:string) => ListingModel.findByIdAndDelete(id)
export const getMerchantListings = (id:string) => ListingModel.find({$where: function() { return this.user_id === id }})