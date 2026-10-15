"use client";

type ButtonProps = {
  handleClick: () => void;
  label: string;
};

export default function Button({ handleClick, label }: ButtonProps) {
  return <button onClick={handleClick}>{label}</button>;
}
