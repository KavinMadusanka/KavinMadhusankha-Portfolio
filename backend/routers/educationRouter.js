import express from 'express';
import { createEducation, deleteEducation } from '../controllers/educationController.js';
import { requiredSignIn } from './../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/createEducation",requiredSignIn, createEducation);
router.delete("/removeEducation", requiredSignIn, deleteEducation);

export default router;
