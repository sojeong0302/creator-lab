"use client";

import { useMutation } from "@tanstack/react-query";

type LoginData = {
  email: string;
  password: string;
};

export default function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("로그인에 실패했습니다.");
      }

      return response.json();
    },
  });
}
