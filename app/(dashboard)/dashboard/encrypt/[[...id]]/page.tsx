import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"

interface PageProps {
  params: {
    id: string[]
  }
}
const page = ({ params }: PageProps) => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Save Passwords" text="Save your passwords." />
      <div>coming soon.</div>
    </DashboardShell>
  )
}

export default page
