export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Laptix - Laptop Inventory System</h1>
      <div className="mt-5 space-x-4">
        <a href="/checkin" className="text-blue-500 underline">Check In</a>
        <a href="/checkout" className="text-blue-500 underline">Check Out</a>
        <a href="/laptop/1" className="text-blue-500 underline">View Laptop</a>
      </div>
    </div>
  )
}