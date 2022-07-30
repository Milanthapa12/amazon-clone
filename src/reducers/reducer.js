export const initialState = {
  cart: [],
  user: null,
};
//selector
export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => {
    console.log(item, "milan", item.price);
    return item.price + amount;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((item) => item.id === action.id);
      const newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`No ite found with ${action.id} into cart.`);
      }
      return {
        ...state,
        cart: newCart,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
