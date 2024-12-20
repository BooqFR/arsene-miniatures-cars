import clsx from 'clsx'
import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react'

type InputPros = {
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  label: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  showLabel?: boolean
  type?: HTMLInputTypeAttribute
  value: string
}

export default function Input({
  className,
  icon,
  isDisabled = false,
  label,
  placeholder,
  onChange,
  showLabel,
  type = 'text',
  value
}: InputPros) {
  // ClassNames
  const classNames = clsx('w-full', className)

  return (
    <div className={classNames}>
      {showLabel && (
        <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="flex">
        {icon && (
          <span className="inline-flex *:size-5 items-center px-3 text-sm text-gray-400 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
            {icon}
          </span>
        )}
        <input
          type={type}
          disabled={isDisabled}
          id={label}
          onChange={onChange}
          value={value}
          className={clsx(
            icon ? 'rounded-r-lg' : 'rounded-lg',
            '  bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5'
          )}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
