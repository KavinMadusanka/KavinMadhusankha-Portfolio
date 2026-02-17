import { removeImage } from '../helpers/validator.js';
import technical from '../models/technicalModel.js';
import { textValidator } from './../helpers/validator.js';

export const createTechnical = async (req, res) => {
    try {
        const { name, skillLevel, type } = req.body;

        if(!name || !skillLevel || !type){
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }
        const textValid = textValidator(skillLevel) && textValidator(type);
        if(!textValid){
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: "Invalid input for skill level or type.",
            });
        }

        const existingTechnical = await technical.findOne({ name });
        if (existingTechnical) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: "Technical skill with this name already exists.",
            });
        }

        const newTechnical = await new technical({
            name,
            skillLevel,
            type,
            icon: req.file ? req.file.path : null,
        }).save();

        res.status(201).json({
            success: true,
            message: "Technical skill created successfully.",
        });

    } catch (error) {
        if (req.file) {
            removeImage(req.file.path);
        }
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}

//get all technical skills
export const getAllTechnical = async (req, res) => {
    try {
        const allTechnical = await technical.find({});
        res.status(200).json({
            success: true,
            data: allTechnical,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}

//update technical skill
export const updateTechnical = async (req, res) => {
    try {
        const { id } = req.params;
        const { skillLevel, type, name} = req.body;

        const textValid = textValidator(skillLevel) && textValidator(type);
        if(!textValid){
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: "Invalid input for skill level or type.",
            });
        }

        const existingTechnical = await technical.findById(id);
        if (!existingTechnical) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(404).json({
                success: false,
                message: "Technical skill not found.",
            });
        }

        if(req.file && existingTechnical.icon){
            removeImage(existingTechnical.icon);
        }

        const updatedTechnical = await technical.findByIdAndUpdate(
            id,
            {
                name,
                skillLevel,
                type,
                icon: req.file ? req.file.path : existingTechnical.icon,
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Technical skill updated successfully.",
        });

    } catch (error) {
        if (req.file) {
            removeImage(req.file.path);
        }
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}

//delete technical skill
export const deleteTechnical = async (req, res) => {
    try {
        const { id } = req.params;
        const existingTechnical = await technical.findById(id);
        if (!existingTechnical) {
            return res.status(404).json({
                success: false,
                message: "Technical skill not found.",
            });
        }
        await technical.findByIdAndDelete(id);
        if (existingTechnical.icon) {
            removeImage(existingTechnical.icon);
        }
        res.status(200).json({
            success: true,
            message: "Technical skill deleted successfully.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}