"use client";

import { useState } from "react";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import useLogin from "@/hooks/useLogin";
import useMe from "@/hooks/useMe";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin();
  const { data, isLoading, isError, error } = useMe();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <>
      {loginMutation.isPending && <p>로그인 중...</p>}
      {loginMutation.isSuccess && <p>로그인 성공!</p>}
      {data && <p>로그인한 사용자 ID: {data.data.userId}</p>}
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <Input
          text="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          text="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="로그인" />
      </form>
    </>
  );
}
