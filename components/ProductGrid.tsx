import type { Product } from "@/types/product"
import ProductCard from "./ProductCard"

async function getProducts(searchParams: { search?: string; category?: string }) {
  try {
    const params = new URLSearchParams()
    if (searchParams.search) params.append("search", searchParams.search)
    if (searchParams.category) params.append("category", searchParams.category)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products?${params}`, {
      cache: "no-store",
    })
    if (!res.ok) throw new Error("Failed to fetch products")
    return res.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export default async function ProductGrid({
  searchParams,
}: {
  searchParams: { search?: string; category?: string }
}) {
  const products: Product[] = await getProducts(searchParams)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
