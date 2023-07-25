import { Features } from "@/components/HomePage/Features"
import { Hero } from "@/components/HomePage/Hero"

export const dynamic = "force-static"
export const runtime = "edge"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
