import { useState } from "react"

export default function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    const existingUser = users.find((u) => u.email === email && u.password === password)

    if (existingUser) {
      localStorage.setItem("user", JSON.stringify(existingUser))
      setUser(existingUser)
      setPage("home")
    } else {
      setError("Invalid credentials ❌")
    }
  }

  return (
    <div className="bg-white shadow-xl p-8 rounded-2xl w-96 border border-green-200">
      <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">Login 🔑</h2>
      {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 shadow-md">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <button className="text-green-600 font-semibold underline" onClick={() => setPage("signup")}>
          Sign Up
        </button>
      </p>
    </div>
  )
}
