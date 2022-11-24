import React from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
function Alert({ color = 'red', title, children, icon, withCloseButton }) {
  return (
    <div
      className={clsx('flex rounded p-3', {
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
            className={clsx('h-5 w-5', {
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
        <div className="ml-5 flex w-6  justify-center  py-1">
          <button
            className={clsx('h-5 w-5', {
              'rounded text-yellow-800 transition-all hover:bg-yellow-200 hover:text-yellow-900 active:bg-yellow-300':
                color === 'yellow',
              'rounded text-red-800 transition-all hover:bg-red-200 hover:text-red-900 active:bg-red-300':
                color === 'red',
              'rounded text-green-800 transition-all hover:bg-green-200 hover:text-green-900 active:bg-green-300':
                color === 'green',
              'rounded text-blue-800 transition-all hover:bg-blue-200 hover:text-blue-900 active:bg-blue-300':
                color === 'blue',
              'rounded text-gray-800 transition-all hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300':
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
