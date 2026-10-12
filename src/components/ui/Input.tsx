import { useId, type InputHTMLAttributes, type ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...rest
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const messageId = `${inputId}-msg`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-xs font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 flex items-center text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error || hint ? messageId : undefined}
          className={`w-full rounded-xl border bg-white py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 dark:bg-gray-900 dark:text-gray-100 ${
            leftIcon ? 'pl-9.5' : 'pl-3.5'
          } ${rightIcon ? 'pr-9.5' : 'pr-3.5'} ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:focus:border-blue-400'
          } ${className}`}
          {...rest}
        />
        {rightIcon && (
          <div className="absolute right-3 flex items-center text-gray-400">{rightIcon}</div>
        )}
      </div>
      {(error || hint) && (
        <p
          id={messageId}
          className={`text-xs ${
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}