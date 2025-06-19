export interface Product {
  id: string
  name: string
  price: number
  imageUrl?: string
  description?: string
  category?: string
  createdAt?: string
  updatedAt?: string
}

export interface CreateProductRequest {
  name: string
  price: number
  imageUrl?: string
  description?: string
  category?: string
}
