import Link from "next/link";
import { fetchProducts } from "../sanity/sanity.query";

export default async function Cards() {
  const products = await fetchProducts();

  return (
    <div className="p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        products.map((item: any) => (
          <div
            key={item.slug.current}
            className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"
          >
            <div className="w-full p-4">
              {
              item.images ? (
                <img src={item.images}  alt={item.title} className="aspect-[8/6] w-full object-contain"
                />
              ) : (

                <div className="aspect-[8/6] w-full bg-gray-200 flex items-center justify-center">

                  <p className="text-gray-500">No Image Available</p>
                  
                </div>
              )}

            </div>

            <div className="p-6">
              <hr className="border mb-6" />

              <div>

                <h4 className="text-sm text-gray-800 leading-relaxed">

                  {item.title}
                </h4>

                <p className="text-base text-gray-800 font-bold mt-4">

                  {`$${item.price}`}

                </p>

              </div>

              <Link href={`/${item.slug.current}`}>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 mt-4">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
