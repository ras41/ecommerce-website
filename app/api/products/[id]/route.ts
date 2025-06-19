import { type NextRequest, NextResponse } from "next/server"
import type { Product } from "@/types/product"

// In-memory storage for demo purposes
// This should match the products array from the main route
const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    imageUrl: "/headphones.png",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    imageUrl: "/watch.png",
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    category: "electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    imageUrl: "/cotton_shirt.png",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    category: "clothing",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Professional Camera Lens",
    price: 899.99,
    imageUrl: "/camera_lens.jpg",
    description: "Professional-grade camera lens for stunning photography.",
    category: "electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    price: 449.99,
    imageUrl: "/ergonomic_chair.jpeg",
    description: "Comfortable ergonomic office chair with lumbar support.",
    category: "home",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 79.99,
    imageUrl: "/speaker.jpeg",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    category: "electronics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Running Shoes",
    price: 129.99,
    imageUrl: "/shoes.png",
    description: "Comfortable running shoes with advanced cushioning technology.",
    category: "sports",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Coffee Maker",
    price: 159.99,
    imageUrl: "/coffee_maker.jpeg",
    description: "Programmable coffee maker with built-in grinder.",
    category: "home",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// GET /api/products/[id] - Get a single product by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const product = products.find((p) => p.id === params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

// DELETE /api/products/[id] - Delete a product by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const productIndex = products.findIndex((p) => p.id === params.id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const deletedProduct = products.splice(productIndex, 1)[0]

    return NextResponse.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
