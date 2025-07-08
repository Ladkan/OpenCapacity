import mongoose from "mongoose";

const volume_discount_schema = new mongoose.Schema({
    hours: {type: Number, required: true},
    discount: {type: Number, required: true}
})

const specsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    content: {type: String, required: true}
})

const listingDetailsSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    listing_id: {type: mongoose.Schema.Types.ObjectId, ref:'listings', required: true},
    setup_fee: {type: Number},
    rush_order_fee: {type: Number},
    volume_discounts: {type: [volume_discount_schema]},
    materials: {type: [String]},
    specs: {type: [specsSchema]}
})

export const DetailsModel = mongoose.model('listingdetails', listingDetailsSchema)

export const getDetails = (listing_id:string) =>  DetailsModel.findOne({listing_id})
export const getDetailById = (id:string) => DetailsModel.findById(id)
export const createDetail = (values: Record<string,any>) => new DetailsModel(values).save().then((detail) => detail.toObject())
export const deleteDetailById = (id:string) => DetailsModel.findByIdAndDelete(id)
export const updateDetailById = (id: string, values: Record<string,any>) => DetailsModel.findByIdAndUpdate(id,values)