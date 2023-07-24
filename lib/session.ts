import { getServerSession } from "next-auth"

import { authOption } from "@/app/api/auth/[...nextauth]/route"

type USER = {
  name: string
  email: string
  image: string
}
type SESSION = {
  user: USER
}
export async function getCurrentUser() {
  const session: SESSION = (await getServerSession(authOption)) as SESSION
  return session?.user
}
