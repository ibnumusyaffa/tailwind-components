import React from 'react';
import clsx from 'clsx';
// import Loading from './Loading';

function variantStyles({ variant, color }) {
  switch (variant) {
    case 'filled':
      return {
        'bg-sky-500 text-white hover:bg-sky-700 focus:ring focus:ring-sky-300':
          color === 'sky',
        'bg-red-500 text-white hover:bg-red-700 focus:ring focus:ring-red-300':
          color === 'red',
        'bg-green-500 text-white hover:bg-green-700 focus:ring focus:ring-green-300':
          color === 'green',
        'bg-orange-400 text-white hover:bg-orange-500 focus:ring focus:ring-orange-300':
          color === 'yellow',
      };
    case 'light':
      return {
        'bg-sky-50 text-white hover:bg-sky-200 focus:ring-1 focus:ring-sky-300 text-sky-600':
          color === 'sky',
        'bg-red-50 text-white hover:bg-red-200 focus:ring-1 focus:ring-red-300 text-red-600':
          color === 'red',
      };
    case 'outline':
      return {
        'text-white hover:bg-sky-50 focus:ring-1 focus:ring-sky-200 text-sky-600 border border-sky-600':
          color === 'sky',
        'text-white hover:bg-red-50 focus:ring-1 focus:ring-red-200 text-red-600 border border-red-600':
          color === 'red',
      };
    case 'subtle':
      return {
        'text-white hover:bg-sky-50 focus:ring-1 focus:ring-sky-200 text-sky-600':
          color === 'sky',
        'text-white hover:bg-red-50 focus:ring-1 focus:ring-red-200 text-red-600':
          color === 'red',
      };
    default:
      return null;
  }
}

function roundedStyles(rounded) {
  return {
    'rounded-none': rounded === 'none',
    rounded: rounded === 'sm',
    'rounded-md': rounded === 'md',
    'rounded-lg': rounded === 'lg',
    'rounded-xl': rounded === 'xl',
    'rounded-full': rounded === 'full',
  };
}

function sizeStyles(size) {
  return {
    'h-8 text-xs': size === 'xs',
    'h-10 text-sm': size === 'sm',
    'h-12 text-base': size === 'md',
    'h-14 text-lg': size === 'lg',
    'h-16 text-xl': size === 'xl',
  };
}

function Button({
  size = 'md',
  variant = 'filled',
  color = 'sky',
  rounded = 'md',
  children,
  leftIcon,
  rightIcon,
  onClick,
  fullWidth = false,
  disabled,
  type = 'button',
  loading,
  ...props
}) {
  let styles = clsx(
    `transition-all duration-200 ease-out focus:outline-none font-semibold`,
    variantStyles({ variant, color }),
    roundedStyles(rounded),
    sizeStyles(size),
    {
      'opacity-50 cursor-not-allowed': disabled,
      'w-full': fullWidth,
    },
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={styles}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center px-3 ">
        {/* {loading ? (
          <div className="w-6 h-6 mr-2">
            <Loading></Loading>
          </div>
        ) : null} */}
        {leftIcon && !loading ? (
          <div className="mr-2 w-4 h-4 flex justify-center items-center">
            {leftIcon}
          </div>
        ) : null}
        {children}
        {rightIcon && !loading ? (
          <div className="ml-2 w-4 h-4 flex justify-center items-center">
            {rightIcon}
          </div>
        ) : null}
      </div>
    </button>
  );
}

export default Button;
