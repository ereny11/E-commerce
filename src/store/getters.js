export default {
    products(state) {
      if (!state.products) return
      return state.products;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
    cart(state) {
      return state.cart;
    },
    prodQuantity(state) {
      return state.prodQuantity;
    },
    message(state) {
      return state.msg;
    },
  };