import { Features } from "@/components/HomePage/Features"
import { Hero } from "@/components/HomePage/Hero"

export const dynamic = "force-dynamic"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
