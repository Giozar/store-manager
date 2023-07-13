import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js"
import { productSchema } from "../schemas/product.schemas.js"
const router = Router();

router.post("/product", validateSchema(productSchema), createProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", validateSchema(productSchema), updateProduct);

export default router;