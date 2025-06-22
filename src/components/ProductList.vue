<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue'

interface Product {
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
}


const products = ref<Product[]>([])

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
   const data = await res.json();
   products.value = data.products;
   console.log(data.products[0])
  } catch (err) {
    console.error('Fetch failed:', err);
  }
})


</script>

<template>
<ProductCard 

/>
</template>