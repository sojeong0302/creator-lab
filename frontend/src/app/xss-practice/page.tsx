"use client";

import { useState } from "react";

export default function XssPracticePage() {
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="p-10">
      <h1>XSS 실습 페이지</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2"
        placeholder="내용 입력"
      />

      <button onClick={() => setContent(input)} className="ml-2 border p-2">
        출력하기
      </button>

      <div className="mt-5 border p-5" />
    </main>
  );
}
