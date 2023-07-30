import TableSkelton from "@/components/Dashboard/Loading/table-skelton"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"
import { SavePasswordButton } from "@/components/Dashboard/save-password-btn"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Passwords" text="Manage passwords.">
        <SavePasswordButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <TableSkelton />
      </div>
    </DashboardShell>
  )
}
