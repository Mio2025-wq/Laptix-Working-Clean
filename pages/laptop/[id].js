import { useRouter } from "next/router";

const mockData = {
  "LT-10001": {
    brand: "HP",
    model: "EliteBook 840 G7",
    processor: "Intel Core i7-10610U",
    ram: "16GB",
    ssd: "512GB",
    resolution: "1920x1080"
  }
};

export default function LaptopProfile() {
  const router = useRouter();
  const { id } = router.query;
  const laptop = mockData[id];

  if (!laptop) return <div className="p-10 text-center">Laptop not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-10 space-y-4 bg-white shadow rounded mt-10">
      <h1 className="text-2xl font-bold text-center">Laptop Details</h1>
      <div><strong>ID:</strong> {id}</div>
      <div><strong>Brand:</strong> {laptop.brand}</div>
      <div><strong>Model:</strong> {laptop.model}</div>
      <div><strong>Processor:</strong> {laptop.processor}</div>
      <div><strong>RAM:</strong> {laptop.ram}</div>
      <div><strong>SSD:</strong> {laptop.ssd}</div>
      <div><strong>Resolution:</strong> {laptop.resolution}</div>
    </div>
  );
}