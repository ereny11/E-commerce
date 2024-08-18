<script>
  import Menu from './components/Menu.vue';

  export default {
        components:{
          Menu,
        },
        data() {
            return{
                products: null
            }
        }

    }

</script>

<template>
  

    <div>
      <Menu></Menu>
      <router-view :products="products"></router-view>
    </div>
  
</template>

