import express from 'express';
import { createProject, deleteProject, getAllPinProjects } from '../controllers/projectController.js';
import { requiredSignIn } from '../middlewares/authMiddleware.js';
import { createDiskUploader } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Create uploader for project images
const upload = createDiskUploader({
    getDestination: () => path.join(process.cwd(), "project_uploads"),
});

// Create project (multiple images + feature icons)
router.post("/create-project", requiredSignIn,
    upload.fields([
        { name: "images", maxCount: 20 },        // project screenshots
        { name: "featureIcons", maxCount: 20 }   // feature icons
    ]),createProject );

router.get("/getAllPinProjects", getAllPinProjects);
router.delete("/deleteProject", requiredSignIn, deleteProject);

export default router;