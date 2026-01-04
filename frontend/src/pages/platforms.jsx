export default function Platforms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Platforms We Master
      </h1>

      <p className="text-center text-gray-600 mb-12">
        End-to-end marketplace expertise across India’s top e-commerce platforms
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "Amazon", logo: "/platforms/amazon.svg" },
          { name: "Flipkart", logo: "/platforms/flipkart.svg" },
          { name: "Meesho", logo: "/platforms/meesho.png" },
          { name: "JioMart", logo: "/platforms/jiomart.png" },
        ].map((platform) => (
          <div
            key={platform.name}
            className="border rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="h-12 mb-4"
            />
            <h3 className="font-semibold">{platform.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

