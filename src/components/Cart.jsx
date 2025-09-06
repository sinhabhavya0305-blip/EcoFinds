export default function Cart({ cart }) {
  if (cart.length === 0) {
    return <h2 className="text-xl font-semibold text-gray-700">Your cart is empty 🛒</h2>
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Your Cart</h2>
      <ul className="space-y-3">
        {cart.map((item, i) => (
          <li key={i} className="bg-green-50 shadow p-3 rounded-lg flex justify-between items-center">
            <span className="font-medium">{item.title}</span>
            <span className="text-green-700 font-semibold">₹{item.price}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg font-bold text-gray-800 flex justify-between">
        <span>Total:</span>
        <span className="text-green-700">₹{total}</span>
      </div>
      <button className="mt-5 w-full bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 shadow-md">
        Checkout ✅
      </button>
    </div>
  )
}
