import clsx from 'clsx';
import css from './Button.module.css';
import Link from 'next/link';
import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  href?: string;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  type = 'button',
  href,
  onClick,
  className,
  primary,
}: ButtonProps) => {
  if (href)
    return (
      <Link
        href={href}
        className={clsx(css.button, primary && css.white, className)}
      >
        {children}
      </Link>
    );
  return (
    <button
      type={type}
      className={clsx(css.button, primary && css.white, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
