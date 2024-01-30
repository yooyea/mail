sudo npm i bun -g
sudo npm install -g kirimase

----------------------------------------------------

npx create-next-app@latest
        
✔ What is your project named? … nextjs-bun
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes

----------------------------------------------------
kirimase init

? Please pick your preferred package manager Bun
◐ Checking project for existing packages...                                                                                        00:03:05
✔ Successfully searched project and found no additional packages.                                                                 00:03:05

----------------------------------------------------

? Select a component library to use: Shadcn UI (with next-themes)
? Select an ORM to use: Drizzle
? Please choose your DB type MySQL
? Please choose your DB Provider MySQL 2
? Select an authentication package to use: Auth.js (NextAuth)
? Select a provider to add discord, google, github, apple
? Select any miscellaneous packages to add: TRPC, Stripe, Resend

----------------------------------------------------

 │  1. Add Environment Variables to your .env                                                           │
 │  2. Run bun run db:generate                                                                          │
 │  3. Run bun run db:push                                                                              │
 │  4. Run bun run dev                                                                                  │
 │  5. Open http://localhost:3000 in your browser                                                       │
 │  6. Run bun run stripe:listen in a separate terminal                                                 │
 │  7. Build something awesome!               

----------------------------------------------------

bun add drizzle-orm mysql2
bun add -D drizzle-kit

可能会报 error: ConnectionRefused downloading package manifest，对应 Issue：
https://github.com/oven-sh/bun/issues/4988
解决方案是 IPv6 Only local 或者干脆禁用

----------------------------------------------------

bun add @t3-oss/env-nextjs @stripe/stripe-js