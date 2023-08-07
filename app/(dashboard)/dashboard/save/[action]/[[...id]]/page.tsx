import { actions } from "@/lib/Constants"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"
import { EncryptionForm } from "@/components/Dashboard/encrypt/encrypt-form"

interface PageProps {
  params: {
    action: string
    id: string[]
  }
}
const page = ({ params }: PageProps) => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Save Passwords" text="Save your passwords." />
      <div className="grid gap-8">
        <EncryptionForm
          action={params.action as actions}
          id={params?.id?.[0] ?? ""}
        />
      </div>
    </DashboardShell>
  )
}

export default page
