import { useEffect, useState, type ReactNode } from 'react'
import {
  MousePointerClick,
  LayoutGrid,
  TextCursorInput,
  Tag,
  AlertTriangle,
  FolderMinus,
  Sparkles,
  ToggleLeft,
  Bell,
  X,
} from 'lucide-react'

interface NavLink {
  href: string
  label: string
  icon: ReactNode
  badge?: string
}

const links: NavLink[] = [
  { href: '#overview', label: 'Overview', icon: <Sparkles className="h-4 w-4" /> },
  { href: '#buttons', label: 'Buttons', icon: <MousePointerClick className="h-4 w-4" /> },
  { href: '#cards', label: 'Cards', icon: <LayoutGrid className="h-4 w-4" /> },
  { href: '#inputs', label: 'Inputs', icon: <TextCursorInput className="h-4 w-4" /> },
  { href: '#badges', label: 'Badges', icon: <Tag className="h-4 w-4" /> },
  { href: '#alerts', label: 'Alerts', icon: <AlertTriangle className="h-4 w-4" /> },
  { href: '#modal', label: 'Modal', icon: <FolderMinus className="h-4 w-4" /> },
  { href: '#tabs', label: 'Tabs & Switch', icon: <ToggleLeft className="h-4 w-4" /> },
  { href: '#state-flow', label: 'Notifications', icon: <Bell className="h-4 w-4" />, badge: 'Toast' },
]

const sectionIds = links.map((l) => l.href.slice(1))

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const active = useActiveSection(sectionIds)

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-200/80 bg-white/95 pt-0 backdrop-blur-md transition-transform duration-200 ease-in-out dark:border-gray-800/80 dark:bg-gray-950/95 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200/80 px-5 lg:hidden dark:border-gray-800/80">
          <span className="font-bold text-gray-900 dark:text-gray-100">Navigation</span>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 pt-4 lg:pt-20">
          <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            Components
          </p>
          <nav aria-label="Component Navigation" className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 shadow-xs dark:bg-blue-950/60 dark:text-blue-300'
                      : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`transition-colors ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                      }`}
                    >
                      {l.icon}
                    </span>
                    <span>{l.label}</span>
                  </div>
                  {l.badge && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                      {l.badge}
                    </span>
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}