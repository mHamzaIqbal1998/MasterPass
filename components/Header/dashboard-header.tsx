"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import { ThemeToggle } from "../theme-toggle"

interface MainNavProps {
  children?: React.ReactNode
}

export function DashboardHeader({ children }: MainNavProps) {
  return (
    <div className="flex justify-between gap-6 border-2 p-5 drop-shadow-md md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo />
        <span className=" font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        {children}
      </div>
    </div>
  )
}
