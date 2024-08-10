import axios from 'axios';
export default {
      async loadProducts(context, payload){
      
      const response  =  await axios.get(axios.defaults.baseURL);
        payload = response.data;
       context.commit("loadProducts", payload);
        
    },
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters.products;
      const product = products.find((prod) => prod.id === prodId);
      context.commit("addProductToCart", product);
    },
    clearCart(context) {
      context.commit("removeAllFromCart");
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
    addNewProduct(context, payload) {
      context.commit("addNewProduct", payload);
    },
    incrementCartItem(context, payload){
      const prodId = payload.id;
      const products = context.rootGetters.products;
      const product = products.find((prod) => prod.id === prodId);
      context.commit("incrementProduct", product);
    },
    decrementCartItem(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters.products;
      const product = products.find((prod) => prod.id === prodId);
      context.commit("decrementProduct", product);
    },
  };
  