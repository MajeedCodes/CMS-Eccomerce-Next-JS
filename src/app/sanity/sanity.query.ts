import client from "./sanity.client";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    title,
    slug,
    description,
    price,
    "images": image[0].asset->url 
  }`;

  const products = await client.fetch(query);
  return products;
};
