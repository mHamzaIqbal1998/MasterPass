import Link from "next/link"
import { PasswordTableType } from "@/types"
import moment from "moment"

import { PasswordActions } from "./password-actions"

type props = {
  password: PasswordTableType
}
export function Password({ password }: props) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dashboard/save/decrypt/${password.id}`}
          className="font-semibold hover:underline"
        >
          {password.username}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {moment(
              moment(password.updatedAt).utc(true).format("YYYY-MM-DD HH:mm:ss")
            ).fromNow()}
          </p>
        </div>
      </div>
      <PasswordActions id={password.id} username={password.username} />
    </div>
  )
}
