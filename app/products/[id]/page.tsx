import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { headers } from "next/headers"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"

async function getProduct(id: string) {
  try {
    const host = (await headers()).get("host")
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http"
    const res = await fetch(`${protocol}://${host}/api/products/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in-up">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-purple-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="animate-fade-in-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Image
                src={product.imageUrl || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in-right">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category || "Electronics"}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-gray-600">(4.0) • 128 reviews</span>
              </div>
              <p className="text-4xl font-bold text-purple-600 mb-6">${product.price}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description ||
                  "This is an amazing product with premium quality and excellent features. Perfect for everyday use and built to last."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 py-3 rounded-full border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 py-3 rounded-full border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="outline" size="lg" className="w-full py-3 rounded-full">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
