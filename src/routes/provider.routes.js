import { Router } from "express";
import { createProvider, deleteProvider} from "../controllers/provider.controller.js";
export const router = Router();

router.post("/provider", createProvider);
router.delete("/provider/:id", deleteProvider );

export default router;

