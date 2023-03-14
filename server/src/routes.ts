import { z } from "zod"
import { FastifyInstance } from "fastify"
import { generateQRCode } from "./utils/generateQRCode"

const host = process.env.HOST

export async function appRoutes(app: FastifyInstance) {
  app.post("/generate", async (request, reply) => {
    try {
      // Validation schema for the request body.
      const bodySchema = z.object({
        name: z.string().nonempty(),
        linkedinURL: z.string().url().nonempty(),
        githubURL: z.string().url().nonempty()
      })

      const { name, linkedinURL, githubURL } = bodySchema.parse(request.body)

      const url = `http://${host}/${name}?linkedin=${linkedinURL}&github=${githubURL}`
      const code = await generateQRCode(url)

      return {
        code
      }
    } catch (error: any) {
      reply.status(400)

      return {
        error: error.message
      }
    }
  })
}
