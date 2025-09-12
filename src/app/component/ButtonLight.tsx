"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonLightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function ButtonLight({
  children,
  className = "",
  ...props
}: ButtonLightProps) {
  return (
    <button
      className={`cursor-pointer bg-[#9EFF00] text-[#262626] md:text-lg font-medium rounded-lg hover:bg-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
