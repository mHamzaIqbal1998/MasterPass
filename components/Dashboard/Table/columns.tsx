"use client"

import Link from "next/link"
import { PasswordTableType } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import moment from "moment"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const PasswordTableColumns: ColumnDef<PasswordTableType>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: ({ row }) => {
      return moment(
        moment(row.original.updatedAt).utc(true).format("YYYY-MM-DD HH:mm:ss")
      ).fromNow()
    },
  },
  {
    accessorKey: "encryptedPassword",
    header: "Password",
    cell: ({ row }) => {
      try {
        const pass = row.original.encryptedPassword
        if (pass.length <= 4) {
          return (
            <div className="text-right font-medium">
              {row.getValue("encryptedPassword")}
            </div>
          )
        }
        const maskedDigits = "*".repeat(pass.length - pass.length / 2)
        const lastFourDigits = pass.slice(-4)
        const FirstFourDigits = pass.slice(0, 4)

        return FirstFourDigits + maskedDigits + lastFourDigits
      } catch (err) {}
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const password = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(password.username)}
            >
              Copy username
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/dashboard/save/decrypt/${password.id}`}>
                View Password
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
