import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// 회원가입
router.post("/signup", authController.signup);

//로그인
router.post("/login", authController.login);

//액세스 토큰 인증
router.get("/me", authenticate, authController.getMe);

export default router;
