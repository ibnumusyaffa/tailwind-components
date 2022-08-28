import React from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
function Alert({ color = 'red', title, children, icon, withCloseButton }) {
  return (
    <div
      className={clsx('p-3 flex rounded', {
        'bg-yellow-50': color === 'yellow',
        'bg-red-50': color === 'red',
        'bg-green-50': color === 'green',
        'bg-blue-50': color === 'blue',
        'bg-gray-100': color === 'gray',
      })}
    >
      {icon ? (
        <div className="w-8 py-1">
          <div
            className={clsx('w-5 h-5', {
              'text-yellow-500': color === 'yellow',
              'text-red-500': color === 'red',
              'text-green-500': color === 'green',
              'text-blue-500': color === 'blue',
              'text-gray-500': color === 'gray',
            })}
          >
            {icon}
          </div>
        </div>
      ) : null}

      <div
        className={clsx('flex-1 ', {
          'text-yellow-800': color === 'yellow',
          'text-red-800': color === 'red',
          'text-green-800': color === 'green',
          'text-blue-800': color === 'blue',
          'text-gray-800': color === 'gray',
        })}
      >
        {title ? <div className="font-semibold">{title}</div> : null}

        <div>{children ? children : null}</div>
      </div>
      {withCloseButton ? (
        <div className="w-6 flex py-1  ml-5  justify-center">
          <button
            className={clsx('w-5 h-5', {
              'text-yellow-800 transition-all hover:text-yellow-900 hover:bg-yellow-200 active:bg-yellow-300 rounded':
                color === 'yellow',
              'text-red-800 transition-all hover:text-red-900 hover:bg-red-200 active:bg-red-300 rounded':
                color === 'red',
              'text-green-800 transition-all hover:text-green-900 hover:bg-green-200 active:bg-green-300 rounded':
                color === 'green',
              'text-blue-800 transition-all hover:text-blue-900 hover:bg-blue-200 active:bg-blue-300 rounded':
                color === 'blue',
              'text-gray-800 transition-all hover:text-gray-900 hover:bg-gray-200 active:bg-gray-300 rounded':
                color === 'gray',
            })}
          >
            <XMarkIcon></XMarkIcon>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Alert;
