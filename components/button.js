import React from 'react';
import clsx from 'clsx';

function Spinner() {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          opacity="0.25"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
          opacity="0.75"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
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
  loading = false,
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
        {loading ? (
          <div
            className={clsx({
              'w-3 h-3': size === 'xs',
              'w-4 h-4': size === 'sm',
              'w-5 h-5': size === 'md',
              'w-6 h-6': size === 'lg',
              'w-7 h-7': size === 'xl',
            })}
          >
            <Spinner></Spinner>
          </div>
        ) : null}
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

        {rightIcon ? (
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
