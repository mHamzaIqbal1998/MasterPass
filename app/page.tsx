import { Features } from "@/components/HomePage/Features"
import { Hero } from "@/components/HomePage/Hero"

export const runtime = "edge"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
