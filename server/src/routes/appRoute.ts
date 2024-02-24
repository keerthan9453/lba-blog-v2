import { TRPCError } from "@trpc/server"
import { getBlogById, getBlogs } from "../../lib/data"
import { t } from "../trpc"
import { z } from "zod"

export const appRouter = t.router({
    post: t.router({
        all: t.procedure.query(() => {
            return getBlogs()
        }),
        byId: t.procedure
            .input(z.object({ id: z.string() }))
            .query(({ input }) => {
                const post = getBlogById(input.id)
                if (!post) throw new TRPCError({ code: "NOT_FOUND" })
                return post
            }),
    }),
})
