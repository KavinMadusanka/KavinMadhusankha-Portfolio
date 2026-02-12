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