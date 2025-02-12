"use client";

import { add } from "@repo/math/add";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      <br />
      Sum of 5 and 4 = {add(5, 4)}.
    </button>
  );
};
