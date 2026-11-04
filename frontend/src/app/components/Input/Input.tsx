import React from "react";

type InputProps = {
  text: string;
};

export default function Input({ text }: InputProps) {
  return (
    <div className="flex gap-5">
      <label>{text}</label>
      <input type="text" className="border border-white" />
    </div>
  );
}
