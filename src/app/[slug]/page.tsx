import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { fetchProducts } from '@/app/sanity/sanity.query';

type Product = {
  title: string;
  description: string;
  price: number;
  slug: {
    current: string;
  };
  image?: string;
  colors?: string[];
};

export default async function ProductPage({ params }: { params: { slug: string } }) {
  
  const products = await fetchProducts();

  const product = products.find((p: Product) => p.slug.current === params.slug);

  if (!product) {
    return (

      <div className="flex justify-center items-center h-screen">

        <p className="text-lg text-gray-500">Product not found</p>

      </div>
    );
  }

  const imageUrl = product.images || 'https://via.placeholder.com/400';

  return (

    <div className="bg-white">

      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">

        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 p-6 rounded">
         
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

            <div className="px-4 py-10 rounded relative">

            <img src={imageUrl} alt={product.title} className="w-full max-w-xl object-contain rounded"/>

             
            </div>
          </div>

        
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>

            <div className="flex items-center space-x-1 mt-2">
              <FaStar className="w-4 h-4 fill-blue-600" />
              <FaStar className="w-4 h-4 fill-blue-600" />
              <FaStar className="w-4 h-4 fill-blue-600" />
              <FaStar className="w-4 h-4 fill-blue-600" />
              <FaRegStar className="w-4 h-4 fill-[#CED5D8]" />
              <h4 className="text-gray-500 text-base !ml-3">90 Reviews</h4>
            </div>

            <p className="text-sm text-gray-500 mt-2">{product.description}</p>

            <div className="flex flex-wrap gap-4 mt-6">

              <p className="text-gray-800 text-2xl font-bold">${product.price}</p>

            </div>

            <div className="flex gap-4 mt-12 max-w-md">
              <button type="button" className="w-full px-4 py-2.5 border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded" >
                Buy now
              </button>

              <button
                type="button" className="w-full px-4 py-2.5 border border-gray-600 text-gray-600 hover:bg-gray-100 text-sm font-semibold rounded">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
