import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"

export const metadata = {
  title: "Dashboard",
}

export const dynamic = "force-dynamic"

export default async function Dashboard() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/Login")
  }
  return <div>Dashboard</div>
}
