import { textValidator } from "../helpers/validator";
import education from "../models/education.js";

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