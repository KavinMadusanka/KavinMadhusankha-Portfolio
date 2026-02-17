import express from 'express';
import path from 'path';
import { createTechnical, deleteTechnical, getAllTechnical, updateTechnical } from '../controllers/technicalController.js';
import { requiredSignIn } from '../middlewares/authMiddleware.js';
import { createDiskUploader } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

const upload = createDiskUploader({
  getDestination: () => path.join(process.cwd(), "technical_icons"),
});

router.post("/create-technical",requiredSignIn, upload.single("icon"), createTechnical);
router.get("/get-technical", getAllTechnical);
router.put("/update-technical/:id",requiredSignIn, upload.single("icon"), updateTechnical);
router.delete("/delete-technical/:id",requiredSignIn, deleteTechnical);

export default router;