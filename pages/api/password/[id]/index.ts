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
  // GET: /api/password/id Save password
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(403).send({ message: "Unauthorized" })
    }

    const { user } = session

    try {
      const passwordDetails = await db.savedPasswords.findFirst({
        select: {
          id: true,
          username: true,
          encryptedPassword: true,
          email: true,
          website: true,
        },
        where: {
          userId: user.id,
          id: req.query["id"] as string,
        },
      })

      return res.status(200).send(JSON.stringify(passwordDetails))
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" })
    }

    // PATCH: /api/password/id update saved passwords
  } else if (req.method === "PATCH") {
  } else {
    // neither GET nor POST
    return res.status(404).send({ message: "Not found" })
  }
}
