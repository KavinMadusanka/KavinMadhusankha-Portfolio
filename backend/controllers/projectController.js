import project from "../models/projectModel.js";

export const createProject = async (req, res) => {
    try {
        const {title, developmentType, client, startEndDate, role, description, overview, solution, Gitlink, Livelink, TechStacks, features, images} = req.body;
        if(!title || !developmentType || !client || !startEndDate || !role || !description || !overview || !solution || !Gitlink || !TechStacks?.length || !features?.length || !images?.length ){
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }
        // Convert JSON strings to arrays (if coming from form-data)
        if (typeof TechStacks === "string") {
            TechStacks = JSON.parse(TechStacks);
        }
        if (typeof features === "string") {
            features = JSON.parse(features);
        }

        const existingProject = await project.findOne({ title });
        if (existingProject) {
            return res.status(400).json({
                success: false,
                message: "Project with this title already exists.",
            });
        }
        const newProject = await new project({
            title,
            developmentType,
            client,
            startEndDate,
            role,
            description,
            overview,
            solution,
            Gitlink,
            Livelink,
            TechStacks,
            features,
            images
        }).save();

        res.status(201).json({
            success: true,
            message: "Project created successfully.",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}