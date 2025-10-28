# Reusable Design System with React, Tailwind, and Storybook

This repository contains the demo code and materials from my **Devoxx Morocco 2025 talk**,  
where I demonstrate how to build a **reusable and maintainable Design System** using **React**, **TailwindCSS**, and **Storybook**.

---

## 🎯 Goal

The talk shows a clean and practical way to build a **Design System** that is:

- **Reusable** across multiple projects
- **Scalable** for teams of any size
- **Documented** and **testable** with Storybook
- Fully based on **React components** and **TailwindCSS utilities**

---

## 🛠️ Prerequisites

- **Node.js** installed on your machine
- **npm** (comes with Node.js)
- A code editor (I recommend **Visual Studio Code**)

---

## 🔹 Steps Overview

1. **Create a Vite project**

```bash
npm create vite@latest devoxx-design-system -- --template react-ts
```

2. **Install Tailwind CSS**

```bash
npm install tailwindcss @tailwindcss/vite
```

- Add Tailwind config to Vite
- Import Tailwind CSS in **index.css**
- Optionally mention: design tokens can be added here for consistency

3. **Create a reusable Button component**

- Create **src/components/Button/Button.tsx**
- Add props: **variant** and **size**
- Use utility **cn** to merge Tailwind classes efficiently
- Install dependencies:

```bash
npm install clsx tailwind-merge
```

4. **Test the Button in App.tsx**

- Import and render it
- Start the dev server: **npm run dev**

5. **Add Storybook for documentation**

```bash
npm create storybook@latest
```

- Default configuration
- Create **Button.stories.tsx**
- Add variants: Primary, Secondary, Sizes
- Export stories for Storybook

6. **Build and publish the library**

- Install Vite plugin for TypeScript declarations:

```bash
npm install vite-plugin-dts
```

- Update **vite.config.js** for library mode
- Configure **package.json** (name, version, public access)
- Add **tsconfig.build.json** for build configuration
- Create **index.ts** files in each folder for proper exports
- Build: **npm run build**
- Publish to npm:

```bash
npm login
npm publish --access public
```

7. **Test the library in a new project**

- Create a new Vite project
- Install your published package
- Import and use the Button component
- Verify everything works without installing Tailwind again

8. **Build Storybook documentation**

```bash
npm run build-storybook
```

- Integrate static Storybook into CI/CD for team use

---

## ⚡ Optional: Using Design Tokens

For larger projects, you can use design tokens to centralize your styles (colors, spacing, typography, border-radius, etc.) and ensure consistency across components.

### Example Tailwind Configuration with Tokens

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9", // main brand color
          700: "#0369a1", // darker variant
        },
        secondary: "#f97316",
      },
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        xl: "16px",
      },
    },
  },
};
```

### Using Tokens in Components\*\*

```tsx
export const Button = ({ children }) => (
  <button className="bg-primary-500 text-white py-sm px-md rounded-md hover:bg-primary-700">
    {children}
  </button>
);
```

#### Benefits:

- Keep your design consistent across the project
- Easily update branding or spacing globally
- Share tokens between multiple projects or applications
