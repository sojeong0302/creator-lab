import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    const error = new Error("인증 정보가 없습니다.");
    error.status = 401;
    throw error;
  }

  const [type, token] = authorization.split(" ");

  // 에러 처리 (토큰이 올바르지 않을 경우)
  if (type !== "Bearer" || !token) {
    const error = new Error("올바르지 않은 인증 형식입니다.");
    error.status = 401;
    throw error;
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
  } catch (error) {
    const authError = new Error("유효하지 않거나 만료된 토큰입니다.");
    authError.status = 401;
    throw authError;
  }

  req.user = {
    id: decoded.userId,
  };

  next();
};
