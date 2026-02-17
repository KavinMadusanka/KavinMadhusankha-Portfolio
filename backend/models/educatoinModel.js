import mongoose from "mongoose";

export const educationSchema = new mongoose.Schema({
    institutionName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    degree: {
        type: String,
    },

}, {timestamps: true});

export default mongoose.model("Education", educationSchema);