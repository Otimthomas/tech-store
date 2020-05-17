export default function flatteredProducts(products) {
  let newProducts = products.map((item) => {
	const {id} = item.sys;
	const image = item.fields.image.fields.file.url
    const product = {id, ...item.fields, image};
    return product;
  });
  return newProducts;
}

export function setFeatured(products) {
  return products.filter((item) => {
    return item.featured === true;
  });
}
