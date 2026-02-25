import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 cursor-pointer';

  const variants: Record<'filled' | 'outline' | 'text', string> = {
    filled: 'bg-brand text-white hover:bg-brand-light shadow-sm rounded-[60px]',
    outline:
      'border-1 border-border-default text-text-primary hover:bg-bg-primary rounded-[60px]',
    text: 'hover:bg-bg-highlight/50 text-brand',
  };

  const sizes: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'px-3 py-1.5 text-xs h-[10px]',
    md: 'px-3.5 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
