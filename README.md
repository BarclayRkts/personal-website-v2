# 🌿 DeJa Barclay | Digital Garden

A minimalist personal portfolio and digital garden built with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This project serves as a central hub for my professional experience, full-stack projects, and technical engineering identity.

---

## 🔗 Live Demo
You can view the project live here: **[dejabarclay.vercel.app](https://dejabarclay.vercel.app/)**

---

## ✨ Features

* **Custom Theming**: Features a "Warm Parchment" light mode and "Deep Charcoal" dark mode driven by Tailwind v4 CSS variables.
* **Responsive Architecture**: A persistent sidebar navigation layout optimized for both desktop and mobile viewing.
* **Next.js 15+ App Router**: Leverages the latest React features for server-side rendering and optimized performance.
* **Professional Focus**: Content is strictly tailored to software engineering, emphasizing scalability, performance optimization, and full-stack development.

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
* **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── app/               # App Router pages and layouts
│   ├── globals.css    # Tailwind v4 @theme and custom variables
│   └── layout.tsx     # Root layout with ThemeProvider integration
├── components/        # UI Components
│   ├── ui/            # Atomic design components
│   ├── Navigation.tsx # Sidebar with inline theme toggle
│   ├── Projects.tsx   # Dynamic project grid
│   └── ...
├── public/            # Static assets (Resume, images)
└── tailwind.config.ts # Configuration for dark mode switching