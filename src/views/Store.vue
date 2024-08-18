<template>
    <main>
        <div class="wrapper">
           <div class="row-wrapper">
                <div>
                    <h3 class="subtitle">Our Products</h3>
                </div>
            </div>
            <div v-if="!products">
                <h3>Loading...</h3>
            </div>
            <div v-else class="row-wrapper">
                <div class="products-grid">
                    <Wrapper>
                    <ProductCard
                        v-for="product in products"
                        :key="product.id"
                        :id="product.id"
                        :title="product.title"
                        :image="product.image"
                        :description="product.description"
                        :price="product.price"
                        :prodQuantity="product.rating.count"
                        @click="() => $router.push({ path: `/products/${product.id}` })"
                    />
                    </Wrapper>
                </div>
            </div>
        </div>
    </main>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  

  export default {
    components: {
      ProductCard,
    },
    mounted () {
        this.$store.dispatch('loadProducts')
    },
    
    computed: {
      products() {
        const productsSort = this.$store.getters["products"];
        return productsSort
      },
    },
  };
  </script>


<style scoped>
    main{
        color: #000;
        padding: 110px 0;
    }
    .main-title{
        text-transform: uppercase;
        font-weight: 500;
    }
    .subtitle{
        color: #2D2D2D;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
    }
    .row-wrapper{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 20px;
    }
    .products-grid{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }
    .product-image{
        width: 10rem;
    }
    .product-name{
        font-size: 1.75rem;
        text-transform: uppercase;
        font-weight: 500;
    }
    .product-desciption{
        font-size: 1rem;
    }
    .page-btn{
        background-color: #000;
        color: #fff;
        padding: 0.5rem 2rem;
        border: none;
    }
    .product-price{
        font-size: 1.3rem;
        font-weight: 500;
    }
</style>