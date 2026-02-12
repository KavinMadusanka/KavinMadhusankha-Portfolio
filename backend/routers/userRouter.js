import express from 'express';
import { registerUser } from '../controllers/userController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post("/register", upload.single("photo"), registerUser);

export default router;