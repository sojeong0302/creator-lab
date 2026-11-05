"use client";

import { useMutation } from "@tanstack/react-query";

type SignupData = {
  email: string;
  password: string;
};

export default function useSignup() {
  return useMutation({
    mutationFn: async (data: SignupData) => {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }

      return response.json();
    },
  });
}
