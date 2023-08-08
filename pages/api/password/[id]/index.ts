import { NextApiRequest, NextApiResponse } from "next"
import { User } from "next-auth"
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

    // DELETE: /api/password/id delete saved passwords
  } else if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(403).send({ message: "Unauthorized" })
    }

    const { user } = session

    try {
      // Validate the route params.
      const passId = req.query["id"] as string

      // Check if the user has access to this post.
      if (!(await verifyCurrentUserHasAccessToPassword(passId, user))) {
        return res
          .status(403)
          .send({ message: "Unauthorize to delete this password." })
      }
      // Delete the post.
      await db.savedPasswords.delete({
        where: {
          id: passId as string,
        },
      })

      return res.status(204).send({ message: "Successfully deleted password." })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).send(JSON.stringify(error.issues))
      }
      console.log(error)
      return res.status(500).send({ message: "Internal server error." })
    }
  } else {
    // neither GET nor POST
    return res.status(404).send({ message: "Not found" })
  }
}

async function verifyCurrentUserHasAccessToPassword(
  passId: string,
  user: User
) {
  const count = await db.savedPasswords.count({
    where: {
      id: passId,
      userId: user?.id,
    },
  })

  return count > 0
}
