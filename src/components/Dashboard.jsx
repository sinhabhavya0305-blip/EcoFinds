export default function Dashboard() {
  return (
    <div className="bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-3">User Dashboard 👤</h2>
      <p className="text-gray-600">Welcome back! Here you can manage your account.</p>

      <div className="mt-4">
        <label className="block text-gray-700">Username</label>
        <input type="text" placeholder="Enter username" className="w-full border p-2 rounded-lg mt-1" />

        <label className="block text-gray-700 mt-3">Email</label>
        <input type="email" placeholder="Enter email" className="w-full border p-2 rounded-lg mt-1" />

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  )
}
