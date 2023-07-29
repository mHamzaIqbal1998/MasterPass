// ths file have nothing to do with nextauth route for that you need
// to check pages/api because nextauth is currently having trouble with app/api
// till then we are using that.
import NextAuth from "next-auth"

import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
