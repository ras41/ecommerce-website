import { type NextRequest, NextResponse } from "next/server"
import type { Product, CreateProductRequest } from "@/types/product"

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

// GET /api/products - Get all products with optional search and filter
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const category = searchParams.get("category")

    let filteredProducts = [...products]

    // Apply search filter
    if (search) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description?.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Apply category filter
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase(),
      )
    }

    return NextResponse.json(filteredProducts)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body: CreateProductRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.price) {
      return NextResponse.json({ error: "Name and price are required" }, { status: 400 })
    }

    // Validate price
    if (typeof body.price !== "number" || body.price <= 0) {
      return NextResponse.json({ error: "Price must be a positive number" }, { status: 400 })
    }

    // Create new product
    const newProduct: Product = {
      id: (products.length + 1).toString(),
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl || "/placeholder.svg?height=300&width=300",
      description: body.description || "",
      category: body.category || "uncategorized",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
