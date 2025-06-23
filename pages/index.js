export default function Home() {
  return (
    <div className="p-10 space-y-4 text-center">
      <h1 className="text-3xl font-bold">Laptix - Laptop Inventory System</h1>
      <p className="text-gray-600">Choose an action:</p>
      <div className="flex gap-4 justify-center">
        <a href="/checkin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Check In</a>
        <a href="/checkout" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Check Out</a>
        <a href="/laptop/LT-10001" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">View Laptop</a>
      </div>
    </div>
  );
}