import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useToast } from '../../context/ToastContext'

export interface CodeSnippetProps {
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeSnippet({ code, language = 'tsx', title, className = '' }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const { success } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      success('Copied to clipboard!', 'Code snippet is ready to paste.')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      setCopied(false)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-900 text-gray-100 shadow-sm dark:border-gray-800 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-950/60 px-4 py-2 text-xs text-gray-400">
        <span className="font-mono">{title ?? language}</span>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy code snippet"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 transition hover:bg-gray-800 hover:text-gray-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  )
}
