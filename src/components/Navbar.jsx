export default function Navbar({ setPage, cartCount, handleLogout }) {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 
        className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-green-200 transition"
        onClick={() => setPage("home")}
      >
        EcoFinds 🌱
      </h1>

      <div className="space-x-6 flex items-center">
        <button onClick={() => setPage("home")} className="hover:text-green-200">Home</button>
        <button onClick={() => setPage("dashboard")} className="hover:text-green-200">Dashboard</button>
        <button onClick={() => setPage("cart")} className="relative hover:text-green-200">
          Cart 🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2 py-0.5 shadow-md">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          onClick={handleLogout} 
          className="ml-4 bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600 transition shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
