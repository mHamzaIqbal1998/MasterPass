import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"

const Dashboard = async () => {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/Login")
  }
  return <div>Dashboard</div>
}

export default Dashboard
