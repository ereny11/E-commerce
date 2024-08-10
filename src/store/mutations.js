
export default {
  loadProducts (state, payload) {
    state.products = payload
  },  
  addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.id === productData.id
      );
        if(productData.rating.count > 0){
          if (productInCartIndex >= 0) {
            state.cart[productInCartIndex].qty++;
            // productData.prodQuantity--;
          } else {
            const newItem = {
              id: productData.id,
              title: productData.title,
              image: productData.image,
              description: productData.description,
              price: productData.price,
              prodQunatity: productData.rating.count,
              qty: 1,
            };
            state.cart.push(newItem);
          }
          productData.rating.count--;
          state.qty++;
        }
        else{
          alert("Sorry, this product is out of stock Now!")
        }
        
      
      state.total += Math.round(productData.price);
      localStorage.setItem('storedState', JSON.stringify(state))
      // console(state.prodQuantity);
    },

    removeAllFromCart(state){
      state.cart.splice(0, state.cart.length)
      state.total = 0
      state.qty = 0
    },
    removeProductFromCart(state, payload) {
      console.log("removeProductFromCart")
      const prodId = payload.id;
      const productInCartIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === prodId
      );
      const prodData = state.cart[productInCartIndex];
      state.cart.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= Math.round(prodData.price) * prodData.qty;
      localStorage.setItem('storedState', JSON.stringify(state))
    },

    incrementProduct(state, payload) {
      console.log("incrementProduct")
      const productData = payload;
      const productInCart = state.cart.findIndex(
        (ci) => ci.id === productData.id
      );
      if(productData.rating.count > 0){
        if (productInCart >= 0) {
          state.cart[productInCart].qty++;
          state.qty++;
          productData.rating.count--;
        }
        
        
      }else{
        state.msg = "Sorry you exceeded stock limit"
      }
      state.total += Math.round(productData.price);
      localStorage.setItem('storedState', JSON.stringify(state))
    },

    decrementProduct(state, payload) {
      console.log("decrementProduct")
      const productData = payload;
      const productInCart = state.cart.findIndex(
        (ci) => ci.id === productData.id
      );
      
       if(productData.rating.count > 0){
        if( state.cart[productInCart].qty == 1){
          const prodData = state.cart[productInCart];
          state.cart.splice(productInCart, 1);
          state.qty -= prodData.qty;
        }
        else if (productInCart >= 0 && state.cart[productInCart].qty > 0) {
          state.cart[productInCart].qty--;
          state.qty--;
          productData.rating.count++;
          
        }
        
      }
      state.total -= Math.round(productData.price);
      localStorage.setItem('storedState', JSON.stringify(state))
    },


    addNewProduct(state, payload) {
        payload.id = state.nextId
        state.nextId++
        console.log("addNewProduct")
        state.products.push(payload)
        localStorage.setItem('storedState', JSON.stringify(state))
    },
  };