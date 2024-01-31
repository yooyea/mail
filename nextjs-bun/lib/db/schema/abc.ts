import { sql } from "drizzle-orm";
import { date, varchar, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { type getAbcs } from "@/lib/api/abc/queries";

import { nanoid, timestamps } from "@/lib/utils";

export const abc = mysqlTable("abc", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  time: date("time"),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),
});

// Schema for abc - used to validate API requests
const baseSchema = createSelectSchema(abc).omit(timestamps);

export const insertAbcSchema = createInsertSchema(abc).omit(timestamps);
export const insertAbcParams = baseSchema
  .extend({
    time: z.coerce.string().min(1),
  })
  .omit({
    id: true,
  });

export const updateAbcSchema = baseSchema;
export const updateAbcParams = baseSchema.extend({
  time: z.coerce.string().min(1),
});
export const abcIdSchema = baseSchema.pick({ id: true });

// Types for abc - used to type API request params and within Components
export type Abc = typeof abc.$inferSelect;
export type NewAbc = z.infer<typeof insertAbcSchema>;
export type NewAbcParams = z.infer<typeof insertAbcParams>;
export type UpdateAbcParams = z.infer<typeof updateAbcParams>;
export type AbcId = z.infer<typeof abcIdSchema>["id"];

// this type infers the return from getAbc() - meaning it will include any joins
export type CompleteAbc = Awaited<ReturnType<typeof getAbcs>>["abc"][number];
