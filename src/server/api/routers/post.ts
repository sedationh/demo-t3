import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getALl: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany();
  }),

  create: publicProcedure
    .input(z.object({ content: z.string(), authorId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          content: input.content,
          authorId: input.authorId,
        },
      });
    }),
});
