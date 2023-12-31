import { Icons } from "@/components/icons"

export type NavItemSchema = {
  title: string
  href: string
  disabled?: boolean
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type NavItemType = NavItem
export * from "./feature"
export * from "./encrypt-form"
