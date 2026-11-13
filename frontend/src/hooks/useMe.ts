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
      const response = await fetch("http://localhost:8080/api/auth/me", {
        credentials: "include",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("사용자 인증에 실패했습니다.");
      }

      return response.json();
    },
    retry: false,
  });
}
