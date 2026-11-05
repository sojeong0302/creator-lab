export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    message: status === 500 ? "서버 오류가 발생했습니다." : err.message,
  });
};
