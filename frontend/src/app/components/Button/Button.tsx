import React from "react";

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return <button className="cursor-pointer">{text}</button>;
}
