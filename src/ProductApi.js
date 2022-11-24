const api = "https://dummyjson.com";

export const getProduct = (productId) => {
  return fetch(`${api}/products/${productId}`).then((res) => res.json());
};

export const getProducts = (category) => {
  return fetch(`${api}/products/category/${category}`).then((res) =>
    res.json()
  );
};
