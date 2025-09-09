"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonLightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function ButtonDark({
  children,
  className = "",
  ...props
}: ButtonLightProps) {
  return (
    <button
      className={`cursor-pointer bg-[rgba(36,36,36,0.2)] border border-[#333333] text-lg font-medium rounded-lg hover:bg-black transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
