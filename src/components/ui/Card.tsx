import { type HTMLAttributes, type ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  footer?: ReactNode
  badge?: ReactNode
}

export function Card({
  title,
  description,
  footer,
  badge,
  children,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${className}`}
      {...rest}
    >
      {(title || description || badge) && (
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4.5 dark:border-gray-800/80">
          <div>
            {title && (
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            )}
            {description && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>
            )}
          </div>
          {badge && <div className="shrink-0">{badge}</div>}
        </div>
      )}
      <div className="px-6 py-5">{children}</div>
      {footer && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3.5 dark:border-gray-800/80 dark:bg-gray-900/50 rounded-b-2xl">
          {footer}
        </div>
      )}
    </div>
  )
}