<template>
  <Wrapper>
    
    <div class="cart-wrapper">
      <div class="row-wrapper">
        <div>
          <h2 class="main-title">Your Shopping Cart</h2>
        </div>
          <div v-if="cartProducts.length > 0">
            <button class="page-btn" @click="clearAllCart">Clear Cart</button>
          </div>
      </div>

      <div class="cart-list">
        <CartCard
          v-for="product in cartProducts"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :image="product.image"
          :description="product.description"
          :price="product.price"
          :prodQunatity="product.prodQunatity"
          :qty="product.qty"
        ></CartCard>
      </div>

      <div class="cta-wrapper" v-if="cartTotal > 0">
        <button class="cart-cta">Pay {{ cartTotal }} EGP</button>
      </div>
      <div v-else>
        <h3 class="sec-title">Your Shopping Cart is Empty</h3>
      </div>

      <div>
        <router-link to="/">
          <p><i class="pi pi-arrow-left"></i> Back to Shopping</p>
        </router-link>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import CartCard from "../components/CartCard.vue";

export default {
  components: {
    CartCard,
  },
  computed: {
    cartTotal() {
      return this.$store.getters["totalSum"];
    },
    cartProducts() {
      return this.$store.getters["cart"];
    },
  },
  methods: {
    clearAllCart() {
      this.$store.dispatch("clearCart");
      }
    },

};
</script>

<style scoped>

.row-wrapper{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
}
.main-title {
  color: #000;
  padding-bottom: 0.75rem;
  margin-bottom: 40px;
  font-weight: 700;
}
.sec-title {
  color: #000;
  text-align: center;
  margin-top: 20px;
  font-weight: 400;
  font-size: 1.2rem;
}

.cart-wrapper {
  padding: 110px 0;
}
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.cta-wrapper {
  text-align: center;
  margin-top: 40px;
}
.cart-cta {
  border: 1px solid #000;
  color: #000;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: #ffffff;
}
.page-btn{
        background-color: #000;
        color: #fff;
        padding: 0.5rem 2rem;
        border: none;
    }
</style>
