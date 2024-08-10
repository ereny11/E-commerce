<template>
    <div class="cart-card">
      <div class="cart-card-wrapper">
        <div class="image-container">
          <img :src="image" :alt="title" />
        </div>
      </div>
      <div class="cart-card-wrapper">
        <h3>{{ title }} </h3>
        <div class="item-data">
          <div>
            Price per Item:
            <strong>EGP {{ Math.round(price) }}</strong>
          </div>
          <div class="sub-wrapper">
            Quantity:
            <i class="pi pi-minus update-btn" @click="removeItem"></i>
            <strong>{{ qty }}</strong>
            <i class="pi pi-plus update-btn" @click="addItem"></i> 
            
          </div>
        </div>
        <div v-if="errorMessage">
          <p class="error-msg">{{ errorMessage }}</p>
        </div>
        <div class="item-total">Total: EGP {{ itemTotal }}</div>
        <button class="page-btn" @click="remove">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [
      "id",
      "title",
      "image",
      "price",
      "qty",
      "prodQuantity",
      "msg",
    ],
    computed: {
      itemTotal() {
        return (Math.round(this.price) * this.qty);
      },
      errorMessage() {
        return this.$store.getters["message"];
      },
    },
    methods: {
      remove() {
        this.$store.dispatch("removeFromCart", { id: this.id });
      },
      addItem(){
        this.$store.dispatch("incrementCartItem", { id: this.id });
      },
      removeItem(){
        this.$store.dispatch("decrementCartItem", { id: this.id });
      }
    },
  };
  </script>
  
  <style scoped>
  .cart-card{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
  .image-container{
    height: 8rem;
    width: 8rem;
  }
  img { 
   width: 100%;
   height: 100%;
    object-fit: contain;
  }
  
  .item-data {
    display: flex;
    gap: 15px;
    width: 100%;
  }
  
  .item-total {
    font-weight: bold;
    margin: 1rem 0;
    border-top: 1px solid #474747;
    padding: 0.25rem 0;
    width: auto;
  }
  .sub-wrapper{
    display: flex;
    align-items: center;
    gap: 5px;
    color: #000;
  }
  .update-btn{
    border: 1px solid #000;
    border-radius: 0;
    padding: 5px;
    font-size: 0.75rem;
  }
  .error-msg{
    color: #E10101;
  }
  .page-btn{
    background-color: #000;
    color: #fff;
    padding: 0.5rem 2rem;
    border: none;
    }
  </style>