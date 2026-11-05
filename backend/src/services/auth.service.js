import bcrypt from "bcrypt";
import * as authRepository from "../repositories/auth.repository.js";

export const signup = async ({ email, password }) => {
  const existingUser = await authRepository.findByEmail(email);

  // 에러처리
  if (existingUser) {
    const error = new Error("이미 사용 중인 이메일입니다.");
    error.status = 409;
    throw error;
  }

  //비밀번호 해시처리
  const hashedPassword = await bcrypt.hash(password, 10);

  //유저 생성
  const user = await authRepository.createUser({
    email,
    hashedPassword,
  });

  return {
    user,
  };
};
