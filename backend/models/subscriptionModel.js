import mongoose from "mongoose";

export const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export default mongoose.model("Subscription", subscriptionSchema);