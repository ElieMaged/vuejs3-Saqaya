<template>
  <div class="container" v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src='product.images[0]' alt="phone image" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}$</p>
  </div>
  <div v-else>
    <p>Loading product...</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'


const route = useRoute()
const store = useStore()

const productId = Number(route.params.id)

// Computed getter from Vuex store
const cartItems = computed(() => store.getters.cartItems)

// Find the matching product as a computed ref


var products = ref<Product | null>(null)
var product = ref<Product | null>(null)
onMounted(async () => {

  try {
   const res = await fetch('https://dummyjson.com/products/category/smartphones');
   const data = await res.json();
   products = data.products;
   product.value = products.find(prev => {
    return prev.id === productId
   
   })
   console.log(product)
  } catch (err) {
    console.error('Fetch failed:', err);
  }
})
interface Product {
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
    images:string,
}

</script>


<style>
img {
  width: 15rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
}

</style>
