export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2 opacity-60"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we fetch your content</p>
      </div>
    </div>
  )
}
