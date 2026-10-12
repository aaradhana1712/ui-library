import { type HTMLAttributes, type ReactNode } from 'react'
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  icon?: ReactNode
  onClose?: () => void
}

const variants: Record<AlertVariant, { container: string; icon: ReactNode }> = {
  info: {
    container:
      'border-blue-200 bg-blue-50/80 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200',
    icon: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />,
  },
  success: {
    container:
      'border-emerald-200 bg-emerald-50/80 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200',
    icon: <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
  },
  warning: {
    container:
      'border-amber-200 bg-amber-50/80 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200',
    icon: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />,
  },
  danger: {
    container:
      'border-red-200 bg-red-50/80 text-red-900 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200',
    icon: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />,
  },
}

export function Alert({
  variant = 'info',
  title,
  icon,
  onClose,
  children,
  className = '',
  ...rest
}: AlertProps) {
  const currentVariant = variants[variant]

  return (
    <div
      role={variant === 'danger' ? 'alert' : 'status'}
      className={`flex items-start gap-3 rounded-xl border p-4 text-sm transition-all ${currentVariant.container} ${className}`}
      {...rest}
    >
      {icon ?? currentVariant.icon}
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? 'mt-1 text-xs sm:text-sm opacity-90' : 'text-xs sm:text-sm'}>
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss alert"
          className="rounded-lg p-1 opacity-70 hover:opacity-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}