import { Skeleton } from "@/components/ui/skeleton"

export default function TableSkelton() {
  const arr = new Array(4)
  return (
    <div className="rounded-md">
      <div className="bg-gray-800 p-4">
        <div className="space-y-3 ">
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-3 ">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-3 ">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-3 ">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  )
}
