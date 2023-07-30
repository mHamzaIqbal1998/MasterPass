import { EmptyPlaceholder } from "@/components/Common/empty-placeholder"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"
import { SavePasswordButton } from "@/components/Dashboard/save-password-btn"

export const metadata = {
  title: "Dashboard",
}
export default async function Dashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Passwords" text="Manage passwords.">
        <SavePasswordButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="password" />
          <EmptyPlaceholder.Title>No password saved</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any password saved yet. Start saving password.
          </EmptyPlaceholder.Description>
          <SavePasswordButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
