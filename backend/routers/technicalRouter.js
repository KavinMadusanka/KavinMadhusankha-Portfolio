import express from 'express';
import path from 'path';
import { createTechnical } from '../controllers/technicalController.js';
import { requiredSignIn } from '../middlewares/authMiddleware.js';
import { createDiskUploader } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

const upload = createDiskUploader({
  getDestination: () => path.join(process.cwd(), "technical_icons"),
});

router.post("/create-technical",requiredSignIn,upload.single("icon"), createTechnical);


export default router;