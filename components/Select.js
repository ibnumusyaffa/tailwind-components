import React from 'react';
import clsx from 'clsx';

function Select({
  error,
  disabled,
  leftOutside,
  leftIcon,
  rightOutside,
  rightIcon,
  size = 'md',
  color = 'sky',
  rounded = 'sm',
  variant = 'filled',
  children,
  ...props
}) {
  return (
    <div className="relative  flex">
      {leftOutside ? leftOutside : null}
      {leftIcon ? (
        <div className="absolute left-0 top-0 z-20 flex h-full items-center justify-center px-2 text-gray-700">
          <div
            className={clsx({
              'h-3 w-3': size === 'xs',
              'h-4 w-4': size === 'sm',
              'h-5 w-5': size === 'md',
              'h-6 w-6': size === 'lg',
              'h-7 w-7': size === 'xl',
            })}
          >
            {leftIcon}
          </div>
        </div>
      ) : null}

      <select
        disabled={disabled}
        className={clsx(
          // base style
          'z-10 w-full flex-1 leading-tight outline-none transition-all duration-200 ease-in-out ',
          // variant style
          {
            'border-0 bg-gray-100 focus:bg-white': variant === 'filled',
            'bg-white-100 border border-gray-300': variant === 'outline',
            '!border border-red-500 ': error,

            'cursor-not-allowed bg-gray-100 opacity-75': disabled,
          },
          //color style
          {
            'focus:border-blue-500  focus:ring-blue-500': color === 'blue',
            'focus:border-sky-500  focus:ring-sky-500': color === 'sky',
          },

          //size style
          {
            'h-8 text-xs': size === 'xs',
            'h-9 text-sm': size === 'sm',
            'h-10 text-base': size === 'md',
            'h-12 text-lg': size === 'lg',
            'h-14 text-xl': size === 'xl',
          },
          {
            // rounded all side when leftOutside and rightOutside is false
            'rounded-none': rounded === 'none',
            'rounded': rounded === 'sm' && !leftOutside && !rightOutside,
            'rounded-md': rounded === 'md' && !leftOutside && !rightOutside,
            'rounded-lg': rounded === 'lg' && !leftOutside && !rightOutside,
            'rounded-xl': rounded === 'xl' && !leftOutside && !rightOutside,
            'rounded-full': rounded === 'full' && !leftOutside && !rightOutside,

            // rounded only right side when leftOutside is true and rightOutside is false
            'rounded-r': rounded === 'sm' && leftOutside && !rightOutside,
            'rounded-r-md': rounded === 'md' && leftOutside && !rightOutside,
            'rounded-r-lg': rounded === 'lg' && leftOutside && !rightOutside,
            'rounded-r-xl': rounded === 'xl' && leftOutside && !rightOutside,
            'rounded-r-full':
              rounded === 'full' && leftOutside && !rightOutside,

            // rounded only left side when leftOutside is false and rightOutside is true
            'rounded-l': rounded === 'sm' && !leftOutside && rightOutside,
            'rounded-l-md': rounded === 'md' && !leftOutside && rightOutside,
            'rounded-l-lg': rounded === 'lg' && !leftOutside && rightOutside,
            'rounded-l-xl': rounded === 'xl' && !leftOutside && rightOutside,
            'rounded-l-full':
              rounded === 'full' && !leftOutside && rightOutside,

            //add padding to left side when leftIcon is true
            'pl-7': size === 'xs' && leftIcon,
            'pl-8': size === 'sm' && leftIcon,
            'pl-9': size === 'md' && leftIcon,
            'pl-10': size === 'lg' && leftIcon,
            'pl-11': size === 'xl' && leftIcon,
          },
        )}
        {...props}
      >
        {children}
      </select>
      {rightOutside ? rightOutside : null}
    </div>
  );
}

export default Select;
