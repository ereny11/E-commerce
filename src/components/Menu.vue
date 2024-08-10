<template>
  <div class="navbar" id="nav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="logo">Shop</router-link>
      </li>
      <!-- <li class="nav-item">
      <router-link to="/inventory">Inventory</router-link>
      </li> -->
      
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/cart" class="cart-item">
          <i class="pi pi-shopping-cart"></i>
          <span class="counter-cart" v-if="socketCart > 0"> {{ socketCart }} </span>
        </router-link>  
        
      </li>
      <!-- <router-link to="/register">Register</router-link> -->
    </ul>
    <!-- <ul  class="navbar-nav ml-auto" v-if="user">
      <router-link to="/login">Log out</router-link>
    </ul> -->
    
  </div>
</template>
<script>
    
  import 'primeicons/primeicons.css'

    export default {
        name: 'Menu',
        props: ['user'],
        computed: {
            socketCart() {
            return this.$store.getters["quantity"];
            },
        },
    };
</script>
<style>
#nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  background:#FFFFFF;
  box-shadow: 0px 0px 7px 0px #D3D3D3;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.navbar-nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

#nav a {
  /* font-weight: bold; */
  color: #2E2E2E;
  text-decoration: none;
  line-height: 30px;
  transition: 0.4s linear;
  font-size: 1.5rem;
}
#nav a:hover{
  background-color: transparent;
}
#nav a.router-link-exact-active {
  color: #2E2E2E;
  text-decoration: none;
  line-height: 30px;
  transition: 0.4s linear;
}
.logo{
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
}
.cart-item{
  position: relative;
}
.counter-cart {
    color: #1c1a1a;
    font-size: 1rem;
    border-radius: 50px;
    text-align: center;
    position: absolute;
    top: -12px;
    right: -5px;
}
</style>