<template>
  <div class="product-card">
    <img v-if="props.product" id="imgLink" :src="product.images[0]" :alt="product.title" class="product-image"
         @click="goToProduct(props.product)" />
    <div class="product-info">
      <h3 id="title" class="product-name">{{ product.title }}</h3>
      <p id="desc" class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span id="price" class="product-price">{{ product.price }}$</span>
        <button @click="addCart(props.product)" class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from '../store/index'

export interface Product {
  id: number
  title: string
  description: string
  category?: string
  price: number
  images: string []
}


// Props
const props = defineProps<{
  product: Product
}>()

// Store
const store = useStore();
// Router
const router = useRouter()

// Add to cart
function addCart(product: Product) {
  store.addToCart(product);
  alert(`You have added ${product.title} to your cart!`)
}

// Navigate to product details
function goToProduct(product: Product) {
  if (!router) {
    console.error('Router is not available.')
    return
  }
  router.push(`/product/${product.id}`)
}
</script>

<style scoped lang="scss">
.product-card {
  width: 300px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  margin:10px;
  padding:10px;
}
.add-to-cart {
        padding: 0.8rem;
        border: none;
        background: #2b9348;
        color: white;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
          background: #238636;
        }
      }
@media only screen and (min-width: 600px) {
.product-card {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  padding: 0px;

  &:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 1rem;

    .product-name {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .product-description {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 1rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .product-price {
        font-weight: bold;
        color: #2b9348;
      }

      .add-to-cart {
        padding: 0.4rem 0.8rem;
        border: none;
        background: #2b9348;
        color: white;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
          background: #238636;
        }
      }
    }
  }
}

.imgy {
    width: 100%;
    height:100%;
    object-fit:cover;
}
}


</style>
