import mongoose from "mongoose";

const technologySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    skillLevel: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
        required: true,
    },
    type: {
        type: String,
        enum: ["Frontend", "Backend", "Database", "DevOps"],
        required: true,
    }
}, { timestamps: true });

export default mongoose.model("Technology", technologySchema);