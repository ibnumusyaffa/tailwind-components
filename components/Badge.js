import React from 'react';
import clsx from 'clsx';
// import Loading from './Loading';

function variantStyles({ variant, color }) {
  switch (variant) {
    case 'filled':
      return {
        'bg-sky-500 text-white': color === 'sky',
        'bg-red-500 text-white': color === 'red',
        'bg-green-500 text-white': color === 'green',
      };
    case 'light':
      return {
        'bg-sky-50 text-sky-600': color === 'sky',
        'bg-red-50 text-red-600': color === 'red',
        'bg-green-50 ext-green-600': color === 'green',
      };
    case 'outline':
      return {
        'text-sky-600 border border-sky-600': color === 'sky',
        'text-red-600 border border-red-600': color === 'red',
        'text-green-600 border border-green-600': color === 'green',
      };
    default:
      return null;
  }
}

function Badge({
  size = 'md',
  variant = 'filled',
  color = 'sky',
  rounded = 'none',
  children,
  fullWidth = false,
  ...props
}) {
  let style = clsx(
    `transition-all duration-200 ease-out focus:outline-none font-semibold px-3 flex items-center justify-center`,
    variantStyles({ variant, color }),
    {
      'rounded-none': rounded === 'none',
      'rounded': rounded === 'sm',
      'rounded-md': rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'rounded-xl': rounded === 'xl',
      'rounded-full': rounded === 'full',
    },
    {
      'h-5 text-[11px]': size === 'xs',
      'h-6 text-[12px]': size === 'sm',
      'h-7 text-[13px]': size === 'md',
      'h-8 text-[14px]': size === 'lg',
      'h-10 text-[16px]': size === 'xl',
    },
    {
      'w-full': fullWidth,
    },
  );

  return (
    <span>
      <div className={style} {...props}>
        <div>{children}</div>
      </div>
    </span>
  );
}

export default Badge;
