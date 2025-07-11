import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    about: {type:String},
    certifications: {type: [String]},
    authentication:{
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false},
    }
})

export const UserModel = mongoose.model('users', userSchema)

export const getUsers = () => UserModel.find()
export const getUserByEmail = (email: string) => UserModel.findOne({email})
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({'authentication.sessionToken': sessionToken})
export const getUserById = (id:string) => UserModel.findById(id)
export const createUser = (values: Record<string,any>) => new UserModel(values).save().then((user) => user.toObject())
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id)
export const updateUserById = (id:string, values: Record<string,any>) => UserModel.findByIdAndUpdate(id, values)