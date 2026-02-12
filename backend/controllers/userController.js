import user from '../models/userModel.js';
import { hashPassword, comparePassword } from '../helpers/authMiddleware.js';
import { contactNumberValidator, emailValidator, passwordValidator, removeImage, textValidator } from '../helpers/validator.js';
import JWT from "jsonwebtoken";

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
            message: "Server Side Error.",
        })
    }
}

//login user
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check user account exist
        const User = await user.findOne({email});
        if(!User){
            return res.status(404).json({
                success: false,
                message: "User account not found."
            })
        }

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            })
        }

        const emailValid = emailValidator(email);
        if(!emailValid){
            return res.status(400).json({
                success: false,
                message: 'Invalid email format.',
            })
        }

        const isMatch = await comparePassword(password, User.password)
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            })
        }

        const token = JWT.sign(
            {
                userid: user._id,

            },
            process.env.JWT_SECRET, {expiresIn: "7d"}
        )

        res.cookie('access_token',token,{
            httpOnly: true
        }).status(200).json({
            success: true,
            message: "Login Successfully.",
            token
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error."
        })
    }
}

//get user details
export const getUserDetails = async (req, res) => {
    try {
        console.log("first")
        const User = await user.findOne().select("-password");
        if(!User){
            return res.status(404).json({
                success: false,
                message: "Error in data fetching."
            })
        }

        res.status(200).json({
            success: true,
            message: "User details fetched successfully.",
            user: User
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error."
        })
    }
}

//logout function
export const logout = async (req, res) => {
  try {
    res.clearCookie('access_token').status(200).json({
      success: true,
      message: "SignOut Successfully."
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Side Error."
    })
  }
}