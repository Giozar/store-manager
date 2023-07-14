import { Router } from "express";
import { createProvider, deleteProvider} from "../controllers/provider.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { providerSchema } from "../schemas/provider.schemas.js";
export const router = Router();

router.post("/provider", validateSchema(providerSchema), createProvider);
router.delete("/provider/:id", deleteProvider );

export default router;

