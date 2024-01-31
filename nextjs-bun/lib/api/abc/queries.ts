import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { type AbcId, abcIdSchema, abc } from "@/lib/db/schema/abc";

export const getAbcs = async () => {
  const a = await db.select().from(abc);
  return { abc: a };
};

export const getAbcById = async (id: AbcId) => {
  const { id: abcId } = abcIdSchema.parse({ id });
  const [a] = await db.select().from(abc).where(eq(abc.id, abcId));
  return { abc: a };
};

