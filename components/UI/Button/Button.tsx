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
  disabled?: boolean;
  target?: string;
}

const Button = ({
  children,
  type = 'button',
  href,
  onClick,
  className,
  primary,
  disabled,
  target,
}: ButtonProps) => {
  if (href)
    return (
      <Link
        href={href}
        className={clsx(css.button, primary && css.white, className)}
        target={target}
      >
        {children}
      </Link>
    );
  return (
    <button
      type={type}
      className={clsx(css.button, primary && css.white, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
