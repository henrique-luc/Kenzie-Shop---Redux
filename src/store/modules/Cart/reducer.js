const CartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    case "@cart/REMOVE":
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default CartReducer;
