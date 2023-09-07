import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
})
export const AuthSchema = mongoose.models.googleauth || mongoose.model('googleauth', schema)