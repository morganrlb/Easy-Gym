"use client";
import React from "react";
import { motion } from "motion/react";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  type?: "submit";
  disabled?: boolean;
}

export const LiquidGlassButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  type,
  disabled
}: LiquidGlassButtonProps) => {
  const isPrimary = variant === "primary";
  
  const baseClasses = `relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-center backdrop-blur-lg border duration-300 cursor-pointer inline-block hover:text-white`;
  
  const variantClasses = isPrimary
    ? "bg-[var(--primary)]/20 border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)]/30 hover:border-[var(--primary)]/60"
    : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/60";

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Glass reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Liquid morphing background */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${
          isPrimary ? "bg-[var(--primary)]" : "bg-white"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Border glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-[10px] border-2 ${
          isPrimary ? "border-[var(--primary)]" : "border-white"
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <span className="relative -z-5 transition-colors duration-300">
        {children}
      </span>
    </Component>
  );
};
