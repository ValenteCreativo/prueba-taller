import Image from 'next/image'

export default function Gallery() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src="/mock-product.jpg"
        alt="Product Display"
        width={800}
        height={600}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`https://picsum.photos/seed/${i}/300/200`}
            alt={`Project ${i}`}
            width={300}
            height={200}
            className="rounded-xl"
          />
        ))}
      </div>
      <h2 className="text-xl sm:text-2xl font-medium">
        Bringing designs to life with pixel-perfect precision and smooth animations.
      </h2>
    </div>
  )
}
