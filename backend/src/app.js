import express from "express";
import authRouter from "./routes/auth.route.js";

// Express 앱 생성
const app = express();
const PORT = 8080;

// JSON 요청 본문을 파싱하는 미들웨어
app.use(express.json());

// 인증 라우터 등록
app.use("/api/auth", authRouter);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
