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
  if (req.method === "POST") {
    try {
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
  } else if (req.method === "GET") {
    // Handle any other HTTP method
  } else {
    return res.status(404).send({ message: "Not found" })
  }
}

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions)

//     if (!session) {
//       return new Response("Unauthorized", { status: 403 })
//     }

//     const { user } = session
//     const posts = await db.savedPasswords.findMany({
//       select: {
//         id: true,
//         username: true,
//         updatedAt: true,
//         encryptedPassword: true,
//       },
//       where: {
//         userId: user.id,
//       },
//     })

//     return new Response(JSON.stringify(posts))
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     })
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const session = await getServerSession(authOptions)

//     if (!session) {
//       return new Response("Unauthorized", { status: 403 })
//     }
//     const { user } = session

//     const json = await req.json()
//     const { encryptedPassword, ...reqData } = savePasswordSchema.parse(json)

//     const savedPassword = await db.savedPasswords.create({
//       data: {
//         encryptedPassword,
//         userId: user.id,
//         ...reqData,
//       },
//       select: {
//         id: true,
//       },
//     })

//     return new Response(
//       JSON.stringify({ message: "Successfully Saved the password" }),
//       { status: 201 }
//     )
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return new Response(JSON.stringify({ message: error.issues }), {
//         status: 422,
//       })
//     }

//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     })
//   }
// }
