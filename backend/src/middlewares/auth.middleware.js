import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    const error = new Error("인증 정보가 없습니다.");
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

const shelves = [{ books: [{ stock: 41 }, { stock: 5 }] }];
const book = shelves[0].books[1];
book.stock = 8;
console.log(shelves[0].books[0].stock + shelves[0].books[1].stock);
