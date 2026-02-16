import { textValidator } from "../helpers/validator.js";
import education from "../models/educatoinModel.js";

export const createEducation = async (req, res) => {
    try {
        const { institutionName, startDate, endDate, degree } = req.body;

        const valid = textValidator(institutionName) && textValidator(degree);

        if (!institutionName || !startDate || !endDate || !valid) {
            return res.status(400).json({
                success: false,
                message: "Institution name, start date, and end date are required, and must be valid text.",
            });
        }

        const newEducation = await new education({
            institutionName,
            startDate,
            endDate,
            degree
        }).save();

        res.status(201).json({
            success: true,
            message: "Added new Education successfully.",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}

export const deleteEducation = async (req, res) => {
    try {
        const { id } = req.params;

        const Education = await education.findbyId(id);
        if(!Education) {
            res.status(404).json({
                success: false,
                message: "Item not found."
            })
        }

        await education.findByIdAndDelete(id);

        res.status(201).json({
            success: true,
            message: "Item removed successfully."
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}