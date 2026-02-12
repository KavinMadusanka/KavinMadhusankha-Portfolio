import express from 'express';
import { getUserDetails, login, registerUser } from '../controllers/userController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post("/register", upload.single("photo"), registerUser);
router.post("/login", login);
router.get("/getProfileDetails", getUserDetails);

export default router;