export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center border border-green-200 hover:shadow-2xl hover:scale-105 transition-transform duration-200">
      <div className="w-32 h-32 bg-gradient-to-r from-green-200 to-green-300 rounded-lg flex items-center justify-center mb-3 text-4xl">
        🛍️
      </div>
      <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>
      <p className="text-gray-600 text-sm">₹{product.price}</p>
      <p className="text-xs text-gray-500 italic">Category: {product.category}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 hover:shadow-lg transition"
      >
        Add to Cart
      </button>
    </div>
  )
}
