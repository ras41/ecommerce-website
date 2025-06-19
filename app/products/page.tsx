import { Suspense } from "react"
import ProductGrid from "@/components/ProductGrid"
import SearchAndFilter from "@/components/SearchAndFilter"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Discover our amazing collection of premium products
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 animate-fade-in-up delay-200">
          <SearchAndFilter />
        </div>

        {/* Products Grid */}
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-lg">
          <Skeleton className="w-full h-48 rounded-lg mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      ))}
    </div>
  )
}
