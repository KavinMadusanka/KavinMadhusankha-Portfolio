import user from '../models/userModel.js';
import { hashPassword, comparePassword } from '../helpers/authMiddleware.js';
import { contactNumberValidator, emailValidator, passwordValidator, removeImage, textValidator } from '../helpers/validator.js';
import fs from 'fs';

export const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, contactNumber } = req.body;
        // const {photo} = req.file;

        if (!firstname || !lastname || !email || !password || !contactNumber) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'All fields are required.',
            })
        }

        //check email
        const emailValid = emailValidator(email);
        if (!emailValid) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'Invalid email format.',
            })
        }
        const passwordValid = passwordValidator(password);
        if (!passwordValid) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
            });
        }
        
        const textValid = textValidator(firstname) && textValidator(lastname);
        if (!textValid) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'Invalid firstname or lastname format.',
            })
        }
        const contactNumberValid = contactNumberValidator(contactNumber);
        if (!contactNumberValid) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'Invalid contact number format. It should be in the format +947XXXXXXXXX.',
            });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            if (req.file) {
                removeImage(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: 'Email already exists.',
            })
        }
        const hashedPassword = await hashPassword(password);

        const newUser = new user({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            contactNumber,
            photo: req.file ? req.file.filename : null,
        }).save();

        res.status(201).json({
            success: true,
            message: 'User registered successfully.',
        })
    } catch (error) {
        if (req.file) {
            removeImage(req.file.path);
        }

        res.status(500).json({
            success: false,
            message: 'Server Side Error.',
        })
    }
}