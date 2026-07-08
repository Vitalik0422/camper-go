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
  width: string | number | undefined;
  height: string | number | undefined;
}

const Button = ({
  children,
  type = 'button',
  href,
  width = '0px',
  height = '0px',
  primary,
}: ButtonProps) => {
  if (href)
    return (
      <Link
        href={href}
        className={clsx(css.button, primary && css.white)}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {children}
      </Link>
    );
  return (
    <button
      type={type}
      className={clsx(css.button, primary && css.white)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </button>
  );
};
export default Button;
