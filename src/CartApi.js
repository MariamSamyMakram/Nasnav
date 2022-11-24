const api = "https://dummyjson.com";

const user_id = 5;

export const addCart = (productId, quantity) => {
  return fetch(`${api}/carts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user_id,
      products: [
        {
          id: productId,
          quantity: quantity,
        },
      ],
    }),
  }).then((res) => res.json());
};

export const getCart = () => {
  return fetch(`${api}/carts/user/${user_id}`).then((res) => res.json());
};
