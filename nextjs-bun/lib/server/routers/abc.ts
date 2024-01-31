import { getAbcById, getAbcs } from "@/lib/api/abc/queries";
import { publicProcedure, router } from "@/lib/server/trpc";
import {
  abcIdSchema,
  insertAbcParams,
  updateAbcParams,
} from "@/lib/db/schema/abc";
import { createAbc, deleteAbc, updateAbc } from "@/lib/api/abc/mutations";

export const abcRouter = router({
  getAbcs: publicProcedure.query(async () => {
    return getAbcs();
  }),
  getAbcById: publicProcedure.input(abcIdSchema).query(async ({ input }) => {
    return getAbcById(input.id);
  }),
  createAbc: publicProcedure
    .input(insertAbcParams)
    .mutation(async ({ input }) => {
      return createAbc(input);
    }),
  updateAbc: publicProcedure
    .input(updateAbcParams)
    .mutation(async ({ input }) => {
      return updateAbc(input.id, input);
    }),
  deleteAbc: publicProcedure
    .input(abcIdSchema)
    .mutation(async ({ input }) => {
      return deleteAbc(input.id);
    }),
});
