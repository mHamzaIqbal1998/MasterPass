import { Skeleton } from "@/components/ui/skeleton"

export default function FormSkelton() {
  const arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 40))
  return (
    <div className="rounded-md">
      <div className="space-y-5 p-4">
        {arr.map((index) => {
          return (
            <div className="mt-3 space-y-5" key={index}>
              <Skeleton className="h-3 w-1/6" />
              <Skeleton className="h-6 w-full lg:w-3/6 xl:w-2/6" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
