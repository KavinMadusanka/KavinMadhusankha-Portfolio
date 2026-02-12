import mongoose from "mongoose";

export const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    developmentType: {
        type: String,
        // enum: ["Web Development", "Mobile App Development", "Data Science", "Machine Learning", "Other"],
        required: true,
    },
    client: {
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
    role: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    Gitlink: {
        type: String,
        required: true,
    },
    Livelink: {
        type: String,
    },
    TechStacks: [{
        type: String,
        required: true,
    }],
    features: [{
        featureName: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }]
},{timestamps: true});

export default mongoose.model("Project", projectSchema);