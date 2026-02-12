import express from 'express';
import { getUserDetails, login, logout, registerUser } from '../controllers/userController.js';
import upload from '../middlewares/uploadMiddleware.js';
import { requiredSignIn } from './../middlewares/authMiddleware';

const router = express.Router();

router.post("/register", upload.single("photo"), registerUser);
router.post("/login", login);
router.get("/getProfileDetails", getUserDetails);
router.post("/logout", requiredSignIn, logout);

export default router;