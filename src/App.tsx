import { useState, type ReactNode } from 'react'
import {
  Send,
  Download,
  Trash2,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  Bell,
} from 'lucide-react'
import { AppShell } from './components/layout'
import {
  Button,
  Card,
  Input,
  Badge,
  Modal,
  Alert,
  Tabs,
  Switch,
  CodeSnippet,
} from './components/ui'
import { useToast } from './context/ToastContext'

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [activeTab, setActiveTab] = useState('react')
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const { success, error, warning, info } = useToast()

  const emailError = email && !email.includes('@') ? 'Please enter a valid email address' : undefined

  const handleTestLoading = () => {
    setButtonLoading(true)
    setTimeout(() => {
      setButtonLoading(false)
      success('Saved successfully!', 'Your changes have been saved.')
    }, 1200)
  }

  return (
    <AppShell>
      {/* Hero / Overview Header */}
      <section id="overview" className="mb-14 scroll-mt-24 pt-2">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 p-6 sm:p-10 shadow-xs dark:border-gray-800 dark:from-gray-900 dark:via-gray-900/60 dark:to-gray-950">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="info" dot>
              v1.0.0
            </Badge>
            <Badge variant="purple">React + TypeScript</Badge>
            <Badge variant="success">Tailwind CSS</Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Component Library & Responsive Shell
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            A clean set of reusable and accessible UI components designed for modern web applications.
            Built with responsive layouts, dark mode support, and centralized notifications.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => {
                const el = document.getElementById('buttons')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore Components
            </Button>
            <Button
              variant="outline"
              onClick={() => info('Notification Demo', 'Toast notification triggered successfully.')}
              leftIcon={<Bell className="h-4 w-4" />}
            >
              Show Notification
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-gray-200/70 pt-6 dark:border-gray-800">
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">8+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">UI Components</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">TypeScript</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Fully Typed</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Built-in Theme</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">Responsive</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mobile & Desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <Section
        id="buttons"
        title="Button"
        subtitle="Customizable buttons with variants, sizes, loading states, and icon slots."
      >
        <Card>
          <div className="space-y-5">
            <div>
              <p className="mb-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Variants & Icons
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button leftIcon={<Send className="h-4 w-4" />}>Primary</Button>
                <Button variant="secondary" leftIcon={<Sparkles className="h-4 w-4" />}>
                  Secondary
                </Button>
                <Button variant="outline" leftIcon={<Download className="h-4 w-4" />}>
                  Outline
                </Button>
                <Button variant="danger" leftIcon={<Trash2 className="h-4 w-4" />}>
                  Danger
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Sizes & Loading State
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button
                  variant="outline"
                  isLoading={buttonLoading}
                  onClick={handleTestLoading}
                >
                  {buttonLoading ? 'Loading...' : 'Click to Load'}
                </Button>
              </div>
            </div>

            <CodeSnippet
              code={`import { Button } from './components/ui'\nimport { Send } from 'lucide-react'\n\n<Button variant="primary" size="md" leftIcon={<Send className="h-4 w-4" />}>\n  Send Message\n</Button>`}
              title="Button.tsx"
            />
          </div>
        </Card>
      </Section>

      {/* Cards */}
      <Section
        id="cards"
        title="Card"
        subtitle="Content containers with flexible headers, body slots, and footers."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Starter"
            description="For personal and hobby projects."
            badge={<Badge variant="neutral">Free</Badge>}
            footer={
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => success('Starter Plan Selected')}
              >
                Choose Plan
              </Button>
            }
          >
            <div className="space-y-2">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">₹0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">All core features included.</p>
            </div>
          </Card>

          <Card
            title="Pro"
            description="For growing teams and products."
            badge={<Badge variant="purple" dot>Popular</Badge>}
            footer={
              <Button
                size="sm"
                className="w-full"
                onClick={() => success('Pro Plan Selected')}
              >
                Upgrade to Pro
              </Button>
            }
          >
            <div className="space-y-2">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">₹799</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Billed monthly, cancel anytime.</p>
            </div>
          </Card>

          <Card
            title="Enterprise"
            description="Custom solutions for organizations."
            badge={<Badge variant="success">Custom</Badge>}
            footer={
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => info('Contact Request', 'We will get in touch with you shortly.')}
              >
                Contact Us
              </Button>
            }
          >
            <div className="space-y-2">
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">₹2,499</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Dedicated support & security.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Inputs */}
      <Section
        id="inputs"
        title="Input"
        subtitle="Form inputs with labels, icons, helper text, and validation states."
      >
        <Card>
          <div className="grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Full Name"
              placeholder="Your name"
              leftIcon={<User className="h-4 w-4" />}
              hint="Enter your full name"
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              leftIcon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              hint={!emailError ? 'We will never share your email' : undefined}
            />
          </div>

          <div className="mt-5">
            <CodeSnippet
              code={`<Input\n  label="Email Address"\n  type="email"\n  placeholder="you@example.com"\n  error={emailError}\n  hint="We will never share your email"\n/>`}
              title="Input.tsx"
            />
          </div>
        </Card>
      </Section>

      {/* Badges */}
      <Section
        id="badges"
        title="Badge"
        subtitle="Small visual status indicators and labels."
      >
        <Card>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="danger" dot>Error</Badge>
            <Badge variant="info" dot>Info</Badge>
            <Badge variant="purple" icon={<Sparkles className="h-3 w-3" />}>
              Featured
            </Badge>
          </div>
        </Card>
      </Section>

      {/* Alerts */}
      <Section
        id="alerts"
        title="Alert"
        subtitle="Notification banners for important user messages."
      >
        <div className="flex flex-col gap-3.5">
          <Alert
            variant="info"
            title="Note"
            onClose={() => info('Alert dismissed')}
          >
            Your preferences have been saved to local storage.
          </Alert>
          <Alert
            variant="success"
            title="Success"
            onClose={() => success('Alert dismissed')}
          >
            Your account details have been updated successfully.
          </Alert>
          <Alert
            variant="warning"
            title="Warning"
            onClose={() => warning('Alert dismissed')}
          >
            Please verify your email address to continue.
          </Alert>
          <Alert
            variant="danger"
            title="Error"
            onClose={() => error('Alert dismissed')}
          >
            Unable to connect to the server. Please check your internet connection.
          </Alert>
        </div>
      </Section>

      {/* Modal Dialog */}
      <Section
        id="modal"
        title="Modal"
        subtitle="Dialog box with keyboard escape closing and backdrop click."
      >
        <Card>
          <div className="flex items-center gap-4">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Click to open dialog. Press Esc or click outside to close.
            </span>
          </div>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Action"
            description="Please review your details before proceeding."
            footer={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setModalOpen(false)
                    success('Action confirmed successfully!')
                  }}
                  leftIcon={<CheckCircle2 className="h-4 w-4" />}
                >
                  Confirm
                </Button>
              </>
            }
          >
            <p className="leading-relaxed">
              Are you sure you want to proceed with this action? This can be changed later in your settings.
            </p>
          </Modal>
        </Card>
      </Section>

      {/* Tabs & Switch */}
      <Section
        id="tabs"
        title="Tabs & Switch"
        subtitle="Interactive controls for view switching and setting toggles."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card title="Tabs">
            <Tabs
              items={[
                { id: 'react', label: 'React', badge: 'v19' },
                { id: 'ts', label: 'TypeScript', badge: 'v5' },
                { id: 'tailwind', label: 'Tailwind CSS', badge: 'v4' },
              ]}
              activeId={activeTab}
              onChange={setActiveTab}
            />
            <div className="mt-4 rounded-xl border border-gray-200/80 bg-gray-50/50 p-4 text-xs leading-relaxed text-gray-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300">
              {activeTab === 'react' && (
                <p>
                  Built with React functional components, custom hooks, and modern context patterns.
                </p>
              )}
              {activeTab === 'ts' && (
                <p>
                  Strict TypeScript interfaces with fully exported component prop types.
                </p>
              )}
              {activeTab === 'tailwind' && (
                <p>
                  Styled using utility-first Tailwind CSS classes with full dark mode support.
                </p>
              )}
            </div>
          </Card>

          <Card title="Switch">
            <div className="flex flex-col gap-4">
              <Switch
                checked={notificationsEnabled}
                onChange={(e) => {
                  setNotificationsEnabled(e.target.checked)
                  info('Notification setting updated')
                }}
                label="Email Notifications"
                description="Receive updates about your account activity"
              />
              <Switch
                checked={airplaneMode}
                onChange={(e) => setAirplaneMode(e.target.checked)}
                label="Dark Mode Sync"
                description="Synchronize theme preference across tabs"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* Centralized Global State Showcase */}
      <Section
        id="state-flow"
        title="Global Notifications (Toasts)"
        subtitle="Centralized state system for application-wide notifications."
      >
        <Card>
          <p className="mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Click any button below to trigger notifications managed by the global <code>ToastContext</code>:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              onClick={() => success('Success', 'Operation completed successfully.')}
              leftIcon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => error('Error', 'Something went wrong. Please try again.')}
              leftIcon={<AlertTriangle className="h-4 w-4 text-red-500" />}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => warning('Warning', 'Your session will expire in 5 minutes.')}
              leftIcon={<AlertTriangle className="h-4 w-4 text-amber-500" />}
            >
              Warning Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => info('Information', 'A new update is available.')}
              leftIcon={<Info className="h-4 w-4 text-blue-500" />}
            >
              Info Toast
            </Button>
          </div>
        </Card>
      </Section>
    </AppShell>
  )
}