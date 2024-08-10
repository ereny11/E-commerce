<script>
  import Store from './views/Store.vue';
  import Cart from './views/Cart.vue';
  import Menu from './components/Menu.vue';

   import axios from 'axios';




  export default {
        components:{
          Menu,
        },
        data() {
            return{
                products: null
            }
        }, 
        async created(){
            const response  = await axios.get(axios.defaults.baseURL);
            this.products = response.data;
            console.log(this.products)
        }

    }

</script>

<template>
  

    <div>
      <Menu></Menu>
      <router-view :products="products"></router-view>
    </div>
  
</template>

