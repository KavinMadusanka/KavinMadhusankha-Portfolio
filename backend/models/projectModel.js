import mongoose from "mongoose";

export const projectSchema = new mongoose.Schema({
    //project title (e.g., "Personal Portfolio Website", "E-commerce Mobile App", "Data Analysis with Python", etc.)
    title: {
        type: String,
        required: true,
        unique: true,
    },
    //development type (e.g., Web Development, Mobile App Development, Data Science, Machine Learning, etc.)
    developmentType: {
        type: String,
        // enum: ["Web Development", "Mobile App Development", "Data Science", "Machine Learning", "Other"],
        required: true,
    },
    //client or company name for which the project was developed
    client: {
        type: String,
        required: true,
    },
    //project start and end date (e.g., "January 2023 - March 2023")
    startEndDate: {
        type: String,
        required: true,
    },
    //development role (e.g., Frontend Developer, Backend Developer, Full Stack Developer, Data Scientist, etc.)
    role: {
        type: String,
        required: true,
    },
    //project description (a brief overview of the project, its purpose, and its key features)
    description: {
        type: String,
        required: true,
    },
    //project overview (a more detailed explanation of the project, including the problem it solves, the technologies used, and the development process)
    overview: {
        type: String,
        required: true,
    },
    //solution (a description of the solution implemented in the project, including any unique approaches or challenges overcome during development)
    solution: {
        type: String,
        required: true,
    },
    //images related to the project (e.g., screenshots, diagrams, or any visual representation of the project)
    images: [{
        type: String,
        required: true,
    }],
    //github link to the project repository
    Gitlink: {
        type: String,
        required: true,
    },
    //live link to the deployed project (if applicable)
    Livelink: {
        type: String,
    },
    //technologies used in the project (e.g., React, Node.js, Python, etc.)
    TechStacks: [{
        type: String,
        required: true,
    }],
    //features of the project (a list of key features or functionalities implemented in the project, along with a brief description and an icon representing each feature)
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