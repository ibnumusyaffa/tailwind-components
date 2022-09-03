import React from 'react';
import clx, { clsx } from 'clsx';

function Input({
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
  ...props
}) {
  return (
    <div className="relative  flex">
      {leftOutside ? leftOutside : null}
      {leftIcon ? (
        <div className="absolute left-0 top-0 flex items-center justify-center h-full px-2 text-gray-700 z-20">
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
        </div>
      ) : null}

      <input
        disabled={disabled}
        className={clx(
          // base style
          'flex-1 transition-all duration-200 ease-in-out outline-none w-full z-10 ',
          // variant style
          {
            'bg-gray-100 border-none focus:bg-white': variant === 'filled',
            'bg-white-100 border-gray-300': variant === 'outline',
          },
          //color style
          {
            'focus:border-blue-500  focus:ring-blue-500': color === 'blue',
            'focus:border-sky-500  focus:ring-sky-500': color === 'sky',
          },
          // state style
          {
            'opacity-75 cursor-not-allowed bg-gray-100': disabled,
            'border-red-500': error,
          },
          //size style
          {
            'h-7 text-xs': size === 'xs',
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

            //add padding to right side when righticon is true
            'pr-7': size === 'xs' && rightIcon,
            'pr-8': size === 'sm' && rightIcon,
            'pr-9': size === 'md' && rightIcon,
            'pr-10': size === 'lg' && rightIcon,
            'pr-11': size === 'xl' && rightIcon,
          },
        )}
        {...props}
      />
      {rightOutside ? rightOutside : null}
      {rightIcon ? (
        <div className="absolute right-0 top-0 flex items-center justify-center h-full px-2 text-gray-700 z-20">
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
        </div>
      ) : null}
    </div>
  );
}

export default Input;
