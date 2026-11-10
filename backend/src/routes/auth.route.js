import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

// 회원가입
router.post("/signup", authController.signup);

//로그인
router.post("/login", authController.login);

export default router;
