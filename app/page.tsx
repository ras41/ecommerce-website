import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Headphones } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Products
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Shop the latest trends with our curated collection of premium products. Fast delivery, secure payments,
                and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <Image
                  src="/shopping_hero.jpg"
                  alt="Hero Product"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with premium quality products and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Free Shipping",
                description: "Free shipping on orders over $50",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Payment",
                description: "100% secure payment processing",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Premium Quality",
                description: "Only the highest quality products",
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers and discover amazing products today!
            </p>
            <Link href="/products">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-3 rounded-full text-purple-600 hover:text-purple-700 transition-all duration-300 hover:scale-105"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
