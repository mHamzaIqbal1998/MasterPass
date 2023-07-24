import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata = {
  title: "Login",
  description: "Login to your account",
}

export const dynamic = "force-static"

export default async function LoginPage() {
  const user = await getCurrentUser()
  if (user) {
    redirect("/dashboard")
  }

  return (
    <section className="space-y-6 pb-8  pt-[25%] sm:pt-[15%] md:pb-12 lg:py-32 lg:pt-[12%]">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="mx-auto flex w-[250px] flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </section>
  )
}
