import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"
import { EncryptionForm } from "@/components/Dashboard/encrypt/encrypt-form"

interface PageProps {
  params: {
    id: string[]
  }
}
const page = ({ params }: PageProps) => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Save Passwords" text="Save your passwords." />
      <div className="grid gap-8">
        <EncryptionForm />
      </div>
    </DashboardShell>
  )
}

export default page
