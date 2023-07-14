import { Router } from "express";
import { createSale, deleteSale } from "../controllers/sale.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { saleSchema } from "../schemas/sale.schemas.js";
const router = Router();

router.post("/sale", validateSchema(saleSchema), createSale);
router.delete("/sale/:id", deleteSale);

export default router;