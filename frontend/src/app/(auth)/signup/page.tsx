"use client";

import { useState } from "react";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import useSignup from "@/hooks/useSignup";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signupMutation = useSignup();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    signupMutation.mutate({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col items-center">
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

      <Input
        text="비밀번호 확인"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button text="회원가입" />
      {signupMutation.isPending && <p>회원가입 처리 중...</p>}

      {signupMutation.isSuccess && <p>회원가입 성공!</p>}

      {signupMutation.isError && <p>회원가입 실패!</p>}
    </form>
  );
}
