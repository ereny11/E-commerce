<template>
    <main class="page-wrapper">
        <div class="product-card">
            <div class="image-wrapper">
                <img :src="product.image"/>
            </div>
            <div class="product-info">
                <h3>{{ product.title }}</h3>
                <p class="product-desc">{{ product.description }}</p>
                <p>Department: {{ product.category }} </p>
                <div class="price-tag">
                    <p>Price: {{ Math.round(product.price) }} EGP</p>
                </div>
                <div>
                    <p>Available Quantity: {{ product.rating.count }}</p>
                </div>
                <div>
                    <p>Product Rate: {{ product.rating.rate }}</p>
                </div>
                
            </div>
            <div>
                <button @click.stop.prevent="addToCart" class="page-btn">Add +</button>
           </div>
            <div>
                <router-link to="/" class="page-link">
                <p><i class="pi pi-arrow-left"></i> Back to Store</p>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
 export default {
    name: "ProductDetails",
    props: ["id"],
    data() {
        return {
            product: null,
        };
    },
    created(){
        this.product = this.$store.getters['products'].find((product) => product.id === parseInt(this.id))

    },
    methods: {
      addToCart() {
        this.$store.dispatch("addToCart", {
          id: this.product.id
        });
      },
    },


 }
</script>

<style scoped>
.page-wrapper{
    margin: 110px 0;
}
.product-card{
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    align-items: center;
    text-align: center;
    gap: 15px;
}
.image-wrapper{
    width: 15rem;
    height: 15rem;
    max-width: 100%;
}
.image-wrapper img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.product-info{
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;
    justify-content: center;
}
.product-desc{
    width: 80%;
    margin: auto;
}
.price-tag{
    background-color: #000;
    color: #FFFFFF;
    font-weight: 700;
    padding: 15px;
    width: fit-content;
    margin: auto;
}
.page-btn {
  background-color: #ffffff;
  color: #000;
  border: none;
  border: 1px solid #000;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  width: 70px;
  cursor: pointer;
}
</style>