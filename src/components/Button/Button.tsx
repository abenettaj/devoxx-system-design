import React from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center cursor-pointer shadow-md rounded-md text-white font-bold transition-colors py-2";

  const variants = {
    primary: "bg-red-500 hover:bg-red-600",
    secondary: "bg-green-500 hover:bg-green-600",
  };

  const sizes = {
    sm: "px-5 text-sm",
    md: "px-6 text-base",
    lg: "px-7 text-lg",
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
