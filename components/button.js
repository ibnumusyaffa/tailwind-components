import React from 'react';
import clsx from 'clsx';
// import Loading from './Loading';
// import { PlusIcon } from '@heroicons/react/24/solid';
function variantStyles({ variant, color }) {
  switch (variant) {
    case 'filled':
      return {
        'bg-sky-500 text-white enabled:hover:bg-sky-600 enabled:active:bg-sky-700 focus:ring focus:ring-sky-300':
          color === 'sky',
        'bg-red-500 text-white enabled:hover:bg-red-600 enabled:active:bg-red-700 focus:ring focus:ring-red-300':
          color === 'red',
        'bg-green-500 text-white enabled:hover:bg-green-600 enabled:active:bg-green-700 focus:ring focus:ring-green-300':
          color === 'green',
      };
    case 'light':
      return {
        'bg-sky-50 enabled:hover:bg-sky-100 enabled:active:bg-sky-200 focus:ring-2 focus:ring-sky-300 text-sky-600':
          color === 'sky',
        'bg-red-50 enabled:hover:bg-red-100 enabled:active:bg-red-200  focus:ring-2 focus:ring-red-300 text-red-600':
          color === 'red',
        'bg-green-50 enabled:hover:bg-green-100 enabled:active:bg-green-200  focus:ring-2 focus:ring-green-300 text-green-600':
          color === 'green',
      };
    case 'outline':
      return {
        'text-white enabled:hover:bg-sky-50 enabled:active:bg-sky-100 focus:ring-2 focus:ring-sky-200 text-sky-600 border border-sky-600':
          color === 'sky',
        'text-white enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-2 focus:ring-red-200 text-red-600 border border-red-600':
          color === 'red',
        'text-white enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:ring-2 focus:ring-green-200 text-green-600 border border-green-600':
          color === 'green',
      };
    case 'subtle':
      return {
        'text-white enabled:hover:bg-sky-50 enabled:active:bg-sky-100  focus:ring-2 focus:ring-sky-200 text-sky-600':
          color === 'sky',
        'text-white enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-2 focus:ring-red-200 text-red-600':
          color === 'red',
        'text-white enabled:hover:bg-green-50 enabled:active:bg-greeb-100 focus:ring-2 focus:ring-green-200 text-green-600':
          color === 'green',
      };
    default:
      return null;
  }
}

function roundedStyles(rounded) {
  return {
    'rounded-none': rounded === 'none',
    'rounded': rounded === 'sm',
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
    'h-11 text-base': size === 'md',
    'h-14 text-lg': size === 'lg',
    'h-16 text-xl': size === 'xl',
  };
}

function Button({
  size = 'md',
  variant = 'filled',
  color = 'sky',
  rounded = 'sm',
  children,
  leftIcon,
  rightIcon,
  onClick,
  fullWidth = false,
  disabled,
  loading,
  ...props
}) {
  let style = clsx(
    `transition-all focus:outline-none font-semibold`,
    variantStyles({ variant, color }),
    roundedStyles(rounded),
    sizeStyles(size),
    {
      'opacity-50 cursor-not-allowed': disabled,
      'w-full': fullWidth,
    },
  );

  return (
    <button disabled={disabled} className={style} onClick={onClick} {...props}>
      <div className="flex items-center justify-center px-3  h-full space-x-1.5">
        {/* {loading ? (
          <div className="w-6 h-6 mr-2">
            <Loading></Loading>
          </div>
        ) : null} */}
        {leftIcon && !loading ? (
          <div
            className={clsx({
              'w-3 h-3': size === 'xs',
              'w-4 h-4': size === 'sm',
              'w-5 h-5': size === 'md',
              'w-6 h-6': size === 'lg',
              'w-7 h-7': size === 'xl',
            })}
          >
            {leftIcon}
          </div>
        ) : null}
        <div>{children}</div>

        {rightIcon && !loading ? (
          <div
            className={clsx({
              'w-3 h-3': size === 'xs',
              'w-4 h-4': size === 'sm',
              'w-5 h-5': size === 'md',
              'w-6 h-6': size === 'lg',
              'w-7 h-7': size === 'xl',
            })}
          >
            {rightIcon}
          </div>
        ) : null}
      </div>
    </button>
  );
}

export default Button;
