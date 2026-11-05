import React from "react";

type InputProps = {
  text: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(data: InputProps) {
  return (
    <div className="flex gap-5">
      <label>{data.text}</label>
      <input
        type={data.type}
        value={data.value}
        onChange={data.onChange}
        className="border border-white"
      />
    </div>
  );
}
