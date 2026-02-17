import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: null
    },
    contactNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    JobTitle:{
        type: String,
    },
    experience: {
        type: Number,
    },
    resetOtpHash: {
        type: String
    },
    resetOtpExpires:{
        type: Date
    }
}, { timestamps: true });

export default mongoose.model("User",userSchema);