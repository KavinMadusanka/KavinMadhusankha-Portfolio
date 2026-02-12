import express from 'express';
import path from 'path';
import { getUserDetails, login, logout, otp, registerUser, ResetPassword, verifyResetOtp } from '../controllers/userController.js';
import { createDiskUploader } from '../middlewares/uploadMiddleware.js';
import { requiredSignIn } from './../middlewares/authMiddleware.js';

const router = express.Router();

const upload = createDiskUploader({
  getDestination: () => path.join(process.cwd(), "user_photos"),
});

router.post("/register", upload.single("photo"), registerUser);
router.post("/login", login);
router.get("/getProfileDetails", getUserDetails);
router.post("/logout", requiredSignIn, logout);
router.post("/passwordRestOTP",otp);
router.post("/verifyOTP",verifyResetOtp); //comapre OTP code
router.patch("/ResetPassword",ResetPassword); //reset password

export default router;