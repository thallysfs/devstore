import { Skeleton } from "@/components/skeleton"
import { CurrentSearch } from "./current-search"
import { Suspense } from "react"

function SearchLoading() {

  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400]" />
        <Skeleton className="h-[400]" />
        <Skeleton className="h-[400]" />
        <Skeleton className="h-[400]" />
        <Skeleton className="h-[400]" />
        <Skeleton className="h-[400]" />
      </div>
    </div>
  )
}

export default SearchLoading