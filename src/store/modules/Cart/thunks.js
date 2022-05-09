import { AddToCart, RemoveFromCart } from "./actions";

export const AddToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(AddToCart(product));
  };
};

export const RemoveFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(RemoveFromCart(list));
};
