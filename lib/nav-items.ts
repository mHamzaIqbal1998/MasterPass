import { NavItemType, SidebarNavItem } from "@/types"

export const MainNavItems: NavItemType[] = [
  { title: "Home", href: "/" },
  { title: "Features", href: "#features" },
]

export const dashboardSideItems: SidebarNavItem[] = [
  {
    title: "Manage Password",
    href: "/dashboard",
    icon: "folder",
  },
  {
    title: "Save Password",
    href: "/dashboard/save/encrypt",
    icon: "save",
  },
]
