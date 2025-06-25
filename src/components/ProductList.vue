<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue'

interface Product {
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
    images:string,
}


const products = ref<Product[]>([])

onMounted(async () => {

  try {
   const res = await fetch('https://dummyjson.com/products/category/smartphones');
   const data = await res.json();
   products.value = data.products;
  } catch (err) {
    console.error('Fetch failed:', err);
  }
})


</script>

<template>
<div class="product--page">


<ProductCard 
v-for="product in products"
:key="product.id"
:product="product"
class="product--page__single"
/>
</div>
</template>

<style scoped lang="scss">
.product--page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
&__single {
  width: 90%;
}
}
</style>