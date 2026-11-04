import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;

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
