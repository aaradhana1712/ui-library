import { useState, type ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100 selection:bg-blue-500 selection:text-white">
      <Navbar onMenuClick={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main className="mx-auto max-w-6xl px-4 py-8 lg:ml-64 lg:px-12">
        {children}
        <footer className="mt-20 border-t border-gray-200 py-8 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <p>© {new Date().getFullYear()} UI Library. Built with React, TypeScript & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  )
}