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

export const login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);

  if (!user) {
    const error = new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
    error.status = 401;
    throw error;
  }

  // 비밀번호 비교
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const error = new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
    error.status = 401;
    throw error;
  }

  return {
    user: {
      id: user.id,
      email: user.email,
    },
  };
};
