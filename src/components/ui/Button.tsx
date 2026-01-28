import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-[#1B365D] text-white hover:bg-[#152b4a] shadow-sm',
    secondary: 'bg-[#C19A6B] text-white hover:bg-[#a8855a] shadow-sm',
    outline: 'border-2 border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D]/5',
    ghost: 'text-[#1B365D] hover:bg-[#1B365D]/5'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B365D] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}>

      {children}
    </button>);

}