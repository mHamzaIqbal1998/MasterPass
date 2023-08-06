import { headers } from "next/headers"

import { EmptyPlaceholder } from "@/components/Common/empty-placeholder"
import { PasswordTableColumns } from "@/components/Dashboard/Table/columns"
import { PasswordTable } from "@/components/Dashboard/Table/password-table"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/Dashboard/dashboard-shell"
import { SavePasswordButton } from "@/components/Dashboard/save-password-btn"

export const metadata = {
  title: "Dashboard",
}

async function getData() {
  const host = headers().get("host")
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https"
  let data = await fetch(`${protocal}://${host}/api/password`, {
    method: "GET",
    // @ts-ignore
    headers: headers(),
    cache: "no-store",
  })
  if (!data.ok) {
    console.log(data.statusText)
  }

  return data.json()
}

export default async function Dashboard() {
  const passwords = await getData()
  return (
    <DashboardShell>
      <DashboardHeader heading="Passwords" text="Manage passwords.">
        <SavePasswordButton />
      </DashboardHeader>
      <div>
        {passwords?.length ? (
          <PasswordTable columns={PasswordTableColumns} data={passwords} />
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="password" />
            <EmptyPlaceholder.Title>No password saved</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any password saved yet. Start saving password.
            </EmptyPlaceholder.Description>
            <SavePasswordButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
