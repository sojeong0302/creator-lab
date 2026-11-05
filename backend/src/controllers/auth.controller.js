import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  const { email, password } = req.body ?? {}; //이거 안해주면 undefined->500에러로 처리됨

  if (
    typeof email !== "string" ||
    !email.trim() ||
    typeof password !== "string" ||
    !password
  ) {
    const error = new Error("이메일과 비밀번호를 입력해 주세요.");
    error.status = 400;
    throw error;
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    const error = new Error("올바른 이메일 형식이 아닙니다.");
    error.status = 400;
    throw error;
  }

  // 비밀번호 길이 검증
  if (password.length < 8) {
    const error = new Error("비밀번호는 8자 이상이어야 합니다.");
    error.status = 400;
    throw error;
  }

  const result = await authService.signup({
    email,
    password,
  });

  res.status(201).json({
    data: {
      user: result.user,
    },
  });
};
