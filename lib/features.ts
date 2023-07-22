import { feature } from "@/types"
import { FileKey2, Laptop, PackageOpen, ShieldCheck } from "lucide-react"

export const featureList: feature[] = [
  {
    Icon: ShieldCheck,
    title: "Client-Side Encryption",
    description:
      "Encrypt your password with Master Password before they even leave your device.",
  },
  {
    Icon: FileKey2,
    title: "Master Your Security",
    description:
      "Your master password acts as the key to unlock your encrypted passwords on the client side.",
  },
  {
    Icon: Laptop,
    title: "Intuitive Interface",
    description:
      "An intuitive and elegant user interface, making it easy to organize and access your passwords effortlessly.",
  },
  {
    Icon: PackageOpen,
    title: "Open-Source and Transparent",
    description:
      "Fully open-source, enabling you to inspect the source code, scrutinize the encryption methods.",
  },
]
