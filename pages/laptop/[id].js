import { useRouter } from 'next/router'

export default function LaptopDetail() {
  const { query } = useRouter()
  return (
    <div className="p-10">
      <h2 className="text-xl font-bold">Laptop ID: {query.id}</h2>
      <ul>
        <li>Brand: ExampleBrand</li>
        <li>Model: XYZ123</li>
        <li>Processor: Intel i7</li>
        <li>RAM: 16GB</li>
        <li>SSD: 512GB</li>
        <li>Resolution: 1920x1080</li>
      </ul>
    </div>
  )
}