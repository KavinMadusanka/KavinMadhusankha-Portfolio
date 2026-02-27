import express from 'express';
import path from 'path';
import { getProfilePhoto, getUserDetails, login, logout, otp, registerUser, ResetPassword, updateProfile, verifyResetOtp } from '../controllers/userController.js';
import { createDiskUploader } from '../middlewares/uploadMiddleware.js';
import { requiredSignIn } from './../middlewares/authMiddleware.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';
const router = express.Router();

const upload = createDiskUploader({
  getDestination: () => path.join(process.cwd(), "user_photos"),
});

router.post("/register", uploadMiddleware, registerUser);
router.post("/login", login);
router.get("/getProfileDetails", getUserDetails);
router.post("/logout", requiredSignIn, logout);
router.post("/passwordRestOTP",otp);
router.post("/verifyOTP",verifyResetOtp); //comapre OTP code
router.patch("/ResetPassword",ResetPassword); //reset password
router.patch("/updateProfile",requiredSignIn,uploadMiddleware, updateProfile);
router.get("/profile-photo", getProfilePhoto);

export default router;