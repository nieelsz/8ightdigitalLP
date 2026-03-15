import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading, 
    leftIcon, 
    rightIcon, 
    children, 
    disabled, 
    href,
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-950/20',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 hover:text-violet-600',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-12 px-6 text-base', // 48px min-height as per PRD
      lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <a 
          href={href} 
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={isLoading || disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
