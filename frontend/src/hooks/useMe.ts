"use clinet";

import { useQuery } from "@tanstack/react-query";

type MeResponse = {
  data: {
    userId: string;
  };
};

export default function useMe() {
  return useQuery<MeResponse>({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("Access Token이 없습니다.");
      }

      const response = await fetch("http://localhost:8080/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("사용자 인증에 실패했습니다.");
      }

      return response.json();
    },
    retry: false,
  });
}
