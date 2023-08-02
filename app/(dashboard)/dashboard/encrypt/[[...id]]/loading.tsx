import FormSkelton from "@/components/Dashboard/Loading/form-skelton"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"

export default function EncryptionLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Save Passwords" text="Save your passwords." />
      <div className="divide-border-200 divide-y rounded-md border">
        <FormSkelton />
      </div>
    </DashboardShell>
  )
}
