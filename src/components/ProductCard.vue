<template>
  <div class="product-card">
    <div class="image-container">
      <img class="img-style" :src="image" :alt="title" />
      <div class="price-tag">
        <p class="price-label">{{ Math.round(price) }} EGP</p>
      </div>
    </div>
    <div class="card-info">
      <div>
        <p class="product-title">{{ title }}</p>
      </div>
      <div>
        <button @click.stop.prevent="addToCart" class="page-btn">Add +</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["id", "title", "image", "description", "price", "prodQuantity"],
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.id,
        title: this.title,
        image: this.image,
        price: this.price,
        prodQuantity: this.prodQuantity,
      });
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 15px;
  flex: 1 1 22%;
  /* margin: 10px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(60, 60, 60, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  /* padding: 30px; */
}
.image-container {
  width: 100%;
  height: 12rem;
  position: relative;
}
.img-style {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-title {
  /* display: flex; */
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  /* height: 100%; */
}
.product-desciption {
  font-size: 1rem;
}
.price-tag {
  position: absolute;
  right: 0;
  top: 25px;
  background-color: #000;
  padding: 5px 15px;
}
.price-label {
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
}
.card-info {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* .card-info div{
    flex: 1 1 70%;
  } */
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
