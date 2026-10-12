# UI Component Library & Responsive Shell

A modern, accessible, and lightweight React component library styled with Tailwind CSS and full TypeScript support.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 🚀 Live Demo & Repository
- **Live Demo (Vercel/Netlify):** *Add your deployed URL here (e.g. `https://your-ui-library.vercel.app`)*
- **GitHub Repository:** *Add your GitHub URL here (e.g. `https://github.com/your-username/ui-library`)*

---

## 🎯 Architecture & Component Hierarchy

The project follows a scalable, modular design pattern with clean separation between Layout Shell, UI Primitives, and Global State Providers.

```
Root App Hierarchy:
└── <StrictMode>
    └── <ThemeProvider>               <-- LocalStorage & System Preference Dark Mode
        └── <ToastProvider>           <-- Centralized Global Notification Bus
            └── <AppShell>            <-- Responsive Application Shell
                ├── <Navbar />        <-- Sticky header, branding & theme toggle
                ├── <Sidebar />       <-- Responsive drawer & scroll-spy observer
                └── <main>            <-- Content view area
                    ├── <Button />
                    ├── <Card />
                    ├── <Input />
                    ├── <Badge />
                    ├── <Alert />
                    ├── <Modal />
                    ├── <Tabs />
                    ├── <Switch />
                    └── <CodeSnippet />
```

---

## 🌟 Key Features

### 1. 📱 Responsive Application Shell (`AppShell`, `Navbar`, `Sidebar`)
- **Desktop Layout:** Fixed left sidebar navigation with smooth scroll-spy highlighting active sections using `IntersectionObserver`.
- **Mobile Experience:** Slide-out drawer with backdrop blur and touch overlay dismissal.
- **Glassmorphic Navigation:** Sticky top navbar with blur backdrop and quick actions.

### 2. 🌓 Dual-Theme Engine (`ThemeProvider` & `ThemeToggle`)
- Synchronized with system preference (`prefers-color-scheme`).
- Persistent state using `localStorage`.
- Zero-flash transition with Tailwind CSS dark variants (`.dark`).

### 3. ⚡ Centralized Global State Flow (`ToastProvider` & `useToast`)
- Demonstrates decoupled, unidirectional state dispatch across components.
- Triggers queued toast notifications (`success`, `error`, `warning`, `info`).
- Auto-dismiss timers, custom durations, and manual dismiss buttons.

### 4. 🧩 Production-Ready UI Primitives

| Component | Features & Variants | Accessibility (ARIA) |
| :--- | :--- | :--- |
| **`Button`** | `primary`, `secondary`, `outline`, `danger`, sizes (`sm`, `md`, `lg`), loading spinner, icon slots (`leftIcon`, `rightIcon`). | Focus visible ring, disabled semantics |
| **`Card`** | Header title, description, badge slot, body content, and footer action bar. | Semantic container structure |
| **`Input`** | Form labels, left/right icons, helper hint, validation error message with visual states. | `aria-invalid`, `aria-describedby`, auto `useId` |
| **`Badge`** | `neutral`, `success`, `warning`, `danger`, `info`, `purple` with optional status dot or icon. | Metadata chip semantics |
| **`Alert`** | `info`, `success`, `warning`, `danger` with contextual Lucide icons and optional dismiss action. | `role="alert"` / `role="status"` |
| **`Modal`** | Backdrop blur, escape key listener (`Esc`), body scroll lock, focus isolation, header and footer actions. | `role="dialog"`, `aria-modal="true"` |
| **`Tabs`** | Pill tab switcher with badge counters and active indicators. | `role="tablist"`, `role="tab"`, `aria-selected` |
| **`Switch`** | Smooth toggle switch with label and description for settings. | Accessible peer checkbox |
| **`CodeSnippet`**| Code block preview with one-click clipboard copy and toast integration. | Keyboard accessible copy action |

---

## 🛠️ Project Structure

```
src/
├── components/
│   ├── layout/            # Application Shell
│   │   ├── AppShell.tsx   # Root responsive layout wrapper
│   │   ├── Navbar.tsx     # Top navigation with theme switch
│   │   ├── Sidebar.tsx    # Scroll-spy navigation drawer
│   │   ├── ThemeToggle.tsx# Light/dark mode toggle button
│   │   └── index.ts       # Layout barrel exports
│   └── ui/                # Reusable UI Primitives
│       ├── Alert.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── CodeSnippet.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Switch.tsx
│       ├── Tabs.tsx
│       └── index.ts       # UI components barrel exports
├── context/
│   ├── ThemeContext.tsx   # Global dark mode state provider
│   └── ToastContext.tsx   # Centralized global toast notification bus
├── App.tsx                # Showcase demonstration page
├── index.css              # Tailwind CSS v4 setup & theme tokens
└── main.tsx               # Entrypoint with context wrappers
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment Guide (Vercel & Netlify)

### Deploy to Vercel (Recommended):
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `ui-library` repository.
4. Framework Preset: **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.

### Deploy to Netlify:
1. Push your repository to GitHub.
2. Log in to [Netlify](https://netlify.com) and select **"Import an existing project"**.
3. Choose your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Site**.
