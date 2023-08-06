import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { savePasswordSchema } from "@/types/password"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST: /api/password Save password
  if (req.method === "POST") {
    try {
      // checking authorization
      const session = await getServerSession(req, res, authOptions)
      if (!session) {
        return res.status(403).send({ message: "Unauthorized" })
      }

      const { user } = session

      const json = await req.body
      const { encryptedPassword, ...reqData } = savePasswordSchema.parse(json)

      const savedPassword = await db.savedPasswords.create({
        data: {
          encryptedPassword,
          userId: user.id,
          ...reqData,
        },
        select: {
          id: true,
        },
      })

      return res.status(201).send({
        message: "Successfully Saved the password",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).send({ message: error.issues })
      }
      return res.status(500).send({ message: "Internal Server Error" })
    }
    // GET: /api/password get saved passwords
  } else if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      return res.status(403).send({ message: "Unauthorized" })
    }

    const { user } = session

    try {
      const posts = await db.savedPasswords.findMany({
        select: {
          id: true,
          username: true,
          updatedAt: true,
          encryptedPassword: true,
        },
        where: {
          userId: user.id,
        },
      })

      return res.status(200).send(JSON.stringify(posts))
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" })
    }
  } else {
    // neither GET nor POST
    return res.status(404).send({ message: "Not found" })
  }
}
