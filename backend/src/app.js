import express from "express";
import authRouter from "./routes/auth.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import cors from "cors";

// Express 앱 생성
const app = express();
const PORT = 8080;

// CORS 설정
app.use(cors({ origin: "http://localhost:3000" }));

// JSON 요청 본문을 파싱하는 미들웨어
app.use(express.json());

// 인증 라우터 등록
app.use("/api/auth", authRouter);

// 에러 처리 미들웨어
app.use(errorHandler);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
2;
