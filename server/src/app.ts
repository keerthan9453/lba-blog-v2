import express from "express"
import apiRouter from "./routes/api"
import dotenv from "dotenv"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import { appRouter } from "./routes/appRoute"
dotenv.config()

const app = express()
app.use(express.json())

app.use("/api", apiRouter)
app.use("/api/trpc", createExpressMiddleware({ router: appRouter }))

const port = process.env.PORT ? process.env.PORT : "3000"
app.listen(port, () => {
    console.log(`🌠 Server listening on port ${port}`)
})

export default app
