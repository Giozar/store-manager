import { Router } from "express";

import { buy, createUser, login, logout } from "../controllers/user.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createUserSchema, loginSchema } from "../schemas/user.schemas.js";

const router = Router();

router.post("/register",validateSchema(createUserSchema), createUser);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/buy", authRequire, buy);

export default router;
