import { Skeleton } from "@/components/ui/skeleton"

export default function TableSkelton() {
  const arr = Array.from({ length: 4 }, () => Math.floor(Math.random() * 40))

  return (
    <div className="rounded-md">
      <div className="bg-gray-800 p-4">
        <div className="space-y-3 ">
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      {arr.map((index) => {
        return (
          <div className="p-4" key={index}>
            <div className="space-y-3 ">
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
