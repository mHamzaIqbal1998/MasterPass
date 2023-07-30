import * as z from "zod"

export const savePasswordSchema = z.object({
  website: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  encryptedPassword: z.string(),
})
