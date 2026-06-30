# StriveWheels - Production-Ready React Web App

StriveWheels is a production-ready, highly modular React application built with TypeScript, Vite, Tailwind CSS, Zustand, and TanStack Query. It uses a Scalable Feature-Based Architecture inspired by Feature-Sliced Design (FSD) principles.

---

## ⚙️ Tech Stack & Key Libraries
- **Core**: React 19 + TypeScript 5
- **Bundler & Dev Server**: Vite 8 (optimized chunk splitting and resolve mapping)
- **Styling**: Tailwind CSS v3 (custom color palettes and theme utilities)
- **State Management**: Zustand v5 (persisted global stores)
- **API Request & Caching**: Axios (request/response interceptors) + TanStack React Query v5 (query cache, stale times, paginated fetches)
- **Forms & Validation**: React Hook Form v7 + Zod v4 (cross-field refinements, custom styled validation, `noValidate` inputs)
- **Animations**: Framer Motion v12 (micro-interactions, page route transitions, staggered metrics entrance, skeleton pulses)
- **SEO & Metas**: React Helmet Async (page-specific titles, crawling metadata)
- **Testing Suite**: Jest + React Testing Library (JSDOM configuration, userEvent browser simulation)

---

## 🧱 Architecture & Directory Structure

```text
src/
├── app/                  # App setup, context providers wrapper
│   └── providers/
│       └── AppProviders.tsx
├── features/             # Scalable feature-based modules
│   ├── auth/             # Authentication: login, register forms & pages
│   │   ├── components/
│   │   ├── pages/
│   │   └── store/
│   ├── dashboard/        # Dashboard stats, SVG graphs, activity feeds
│   │   └── pages/
│   ├── data-fetching/    # TanStack Query pagination, error simulation
│   │   ├── pages/
│   │   └── services/
│   └── forms/            # Complex profile settings form, avatar upload
│       └── pages/
├── layouts/              # Shell layout templates and Navbar navigation
│   ├── AppLayout.tsx
│   └── Navbar.tsx
├── routes/               # Routing mappings, lazy-loaded components
│   └── AppRoutes.tsx
├── shared/               # Shared reusable components, hooks, & helpers
│   ├── ui/               # Reusable UI elements (Button, Input, Card, Modal, Loader, Skeleton)
│   └── utils/            # Shared tools (cn class merging, axios api-client)
├── styles/               # Global styling directives and scrollbar adjustments
│   └── index.css
└── tests/                # Unit & Integration test suites & mocks
    ├── components/       # Button, Input component unit tests
    ├── features/         # LoginPage userEvent integration tests
    └── mocks/            # Stylesheet mocks
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
Install all production and development packages:
```bash
npm install
```

### 3. Running Development Server
Launch the local Vite server:
```bash
npm run dev
```
The application will be served at `http://localhost:5173`.

### 4. Running the Test Suite
Execute Jest unit and integration tests:
```bash
npm run test
```

### 5. Production Build
Compile and bundle the application into the `dist/` directory:
```bash
npm run build
```

---

## 🔐 Best Practices & Architectural Highlights

1. **Strict Type Safety**: All forms, Zustands, API services, and shared elements are typed with TypeScript interfaces.
2. **Dynamic Animations**: Custom entrance staggered curves and hover/click effects are built with Framer Motion, enhancing the application's premium aesthetic.
3. **Optimized SEO**: Integrated sitemaps, robots.txt, and React Helmet Async elements for optimal search engine performance.
4. **Resilient Forms**: Form elements disable browser native overrides via `noValidate`, letting React Hook Form + Zod deliver consistent styled validation errors.
