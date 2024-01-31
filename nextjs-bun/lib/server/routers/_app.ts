import { computersRouter } from "./computers";
import { router } from "@/lib/server/trpc";
import { abcRouter } from "./abc";

export const appRouter = router({
  computers: computersRouter,
  abc: abcRouter,
});

export type AppRouter = typeof appRouter;
