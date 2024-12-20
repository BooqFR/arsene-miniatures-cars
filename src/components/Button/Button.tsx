import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonPros = {
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right' | 'only'
  isDisabled?: boolean
  isLoading?: boolean
  onPress?: () => void
  rounded?: boolean
  size?: 'sm' | 'base' | 'lg'
  text?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive'
}

// Common Classes
const commonClasses =
  'font-medium text-center inline-flex justify-center items-center rounded-lg transition-all ease-in-out duration-300 outline-none disabled:!cursor-not-allowed disabled:!opacity-40'

// Button Classes based on 'size' props
const sizeVariants = {
  sm: 'px-3 py-2 text-sm',
  base: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-2.5 text-base'
}

// Button Classes based on 'variant' props
const variants = {
  primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
  secondary: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
  tertiary: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300',
  destructive: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300'
}

export default function Button({
  className,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  isDisabled = false,
  isLoading = false,
  onPress,
  size = 'base',
  text,
  type = 'button',
  variant = 'primary'
}: ButtonPros) {
  // ClassNames
  const classNames = clsx(commonClasses, sizeVariants[size], variants[variant], fullWidth && 'w-full', className)

  return (
    <button type={type} className={classNames} onClick={onPress} disabled={isDisabled}>
      {/* Left icon if available */}
      {!!icon && iconPosition === 'left' && (
        <div
          className={clsx(
            isLoading && 'opacity-0',
            size === 'lg' ? 'size-5' : 'size-4',
            'mr-2 flex items-center justify-center'
          )}
        >
          {icon}
        </div>
      )}

      {/* Label or main icon if option icon only was choosen */}
      {!!icon && iconPosition === 'only' ? (
        <span
          className={clsx(
            isLoading && 'opacity-0',
            size === 'lg' ? 'size-5' : 'size-4',
            'flex items-center justify-center'
          )}
        >
          {icon}
        </span>
      ) : (
        <div className="relative">
          {isLoading && (
            <div
              className={clsx(
                size === 'lg' ? 'size-5' : 'size-4',
                'absolute left-0 top-0 flex items-center justify-center'
              )}
            >
              <EllipsisHorizontalIcon className="size-5 animate-ping text-inherit" />
            </div>
          )}
          <span className={clsx('flex h-full w-full items-center', isLoading && 'opacity-0')}>{text}</span>
        </div>
      )}

      {/* Right icon if available */}
      {!!icon && iconPosition === 'right' && (
        <div
          className={clsx(
            isLoading && 'opacity-0',
            size === 'lg' ? 'size-5' : 'size-4',
            'ml-2 flex items-center justify-center'
          )}
        >
          {icon}
        </div>
      )}
    </button>
  )
}
