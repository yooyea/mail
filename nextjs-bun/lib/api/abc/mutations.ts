import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { 
  AbcId, 
  NewAbcParams,
  UpdateAbcParams, 
  updateAbcSchema,
  insertAbcSchema, 
  abc,
  abcIdSchema 
} from "@/lib/db/schema/abc";

export const createAbc = async (abc: NewAbcParams) => {
  const newAbc = insertAbcSchema.parse(abc);
  try {
    await db.insert(abc).values(newAbc)
    return { success: true }
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateAbc = async (id: AbcId, abc: UpdateAbcParams) => {
  const { id: abcId } = abcIdSchema.parse({ id });
  const newAbc = updateAbcSchema.parse(abc);
  try {
    await db
     .update(abc)
     .set({...newAbc, updatedAt: new Date() })
     .where(eq(abc.id, abcId!))
    return {success: true}
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteAbc = async (id: AbcId) => {
  const { id: abcId } = abcIdSchema.parse({ id });
  try {
    await db.delete(abc).where(eq(abc.id, abcId!))
    return {success: true}
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

