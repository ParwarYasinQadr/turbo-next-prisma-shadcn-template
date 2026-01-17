# 🚀 Turbo Next.js Prisma shadcn/ui Template

A simple and modern monorepo template built with **Turborepo**, **Next.js**, **Prisma**, and **shadcn/ui**. tailored for quick setup and easy development.

## ✨ Features

- 🏗️ **Turborepo** - High-performance build system for monorepos
- ⚡ **Next.js 16.1.3** - React framework with App Router and React Server Components
- ⚛️ **React 19.2.3** - Latest React with React Compiler support
- 🗄️ **Prisma 7.2.0** - Next-generation ORM as an internal package
- 🎨 **shadcn/ui** - Beautiful, accessible component library
- 🎭 **Tailwind CSS 4** - Utility-first CSS framework
- 📦 **pnpm** - Fast, disk space efficient package manager
- 🔧 **TypeScript** - Type-safe development experience
- 🎯 **ESLint** - Code linting and quality checks

## 📦 What's Inside?

This monorepo includes the following packages and apps:

### Apps

- `web` - Next.js 16 application with React Compiler enabled(babel-plugin-react-compiler) have been installed which is req for react compiler

### Packages

- `@workspace/database` - Shared Prisma
- `@workspace/ui` - Shared UI component library powered by shadcn
- `@workspace/eslint-config` - Shared ESLint configurations
- `@workspace/typescript-config` - Shared TypeScript configurations

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** ≥24.12.0
- **pnpm** 10.26.2 (will be automatically used via `packageManager` field)

### Installation

1. **Clone or use this template:**

```bash
cd turbo-next-prisma-shadcn-template
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up your environment variables for your db:**

Create a `.env` file in the root directory of the web app as well as database internal package:



4. **Generate Prisma Client:**

```bash
pnpm turbo db:generate
```

5. **Run database migrations:**

```bash
pnpm turbo db:migrate
```

6. **Start the development server:**

```bash
pnpm turbo dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000) 🎉

## 🧱 Root-Level Commands

### Install Dependencies

```bash
pnpm install
```

### Development Commands

```bash
# Run development for all apps
pnpm turbo dev

# Run development for a single app (e.g., web)
pnpm turbo run dev --filter=web
```

### Database Commands (via Turbo)

```bash
# Generate Prisma client
pnpm turbo db:generate

# Run migrations in development
pnpm turbo db:migrate

# Deploy migrations to production
pnpm turbo db:deploy
```

### Build Commands

```bash
# Build all apps and packages
pnpm turbo build

# Build a specific app
pnpm turbo run build --filter=web
```

### Linting

```bash
# Lint all packages
pnpm turbo lint
```

Uses Next.js ESLint to check for:
- JS/TS syntax errors
- Style issues
- Unused variables
- Anti-patterns

### Formatting

```bash
# Format all files with Prettier
pnpm format
```

## 🎨 Using shadcn/ui Components

### Adding Components

To add shadcn/ui components to your app, run the following command from the root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will automatically place UI components in the `packages/ui/src/components` directory, making them available across your entire monorepo.

### Using Components

Import components from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return <Button>Click me</Button>
}
```

## 📁 Project Structure

```
turbo-next-prisma-shadcn-template/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/                # App router pages
│       ├── public/             # Static assets
│       └── package.json
├── packages/
│   ├── database/               # Prisma database package
│   │   ├── prisma/
│   │   │   └── schema.prisma   # Database schema
│   │   └── src/
│   │       └── index.ts        # Prisma client export
│   ├── ui/                     # Shared UI components
│   │   ├── src/
│   │   │   ├── components/     # shadcn/ui components
│   │   │   ├── lib/            # Utilities
│   │   │   └── styles/         # Global styles
│   │   └── package.json
│   ├── eslint-config/          # Shared ESLint configs
│   └── typescript-config/      # Shared TypeScript configs
├── .eslintrc.js
├── package.json
├── pnpm-workspace.yaml
├── turbo.json                  # Turborepo configuration
└── tsconfig.json
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


If you find this template useful, please give it a star on GitHub! ⭐️
