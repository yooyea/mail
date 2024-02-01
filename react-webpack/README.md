# mail

pnpm add react react-dom
pnpm add -D @types/react @types/react-dom
pnpm add typescript -D
npx tsc --init

index.tsx  app.tsx

pnpm add webpack webpack-cli webpack-dev-server webpack-merge -D
pnpm add cross-env -D

<!-- jsx tsx -->
pnpm add -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

<!-- html -->
pnpm add -D html-webpack-plugin

<!-- tailwind css -->
pnpm add -D tailwindcss
npx tailwindcss init

<!-- postcss -->
pnpm add -D postcss-loader postcss autoprefixer
pnpm add -D postcss-import postcss-nesting
pnpm add -D style-loader css-loader

<!-- shadcn -->
pnpm dlx shadcn-ui@latest init

✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Gray
✔ Where is your global CSS file? … src/index.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) … 
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no / yes
✔ Write configuration to components.json. Proceed? … yes

pnpm add tailwindcss-animate class-variance-authority clsx tailwind-merge
pnpm add @radix-ui/react-icons

pnpm dlx shadcn-ui@latest add button

