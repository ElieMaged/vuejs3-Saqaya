<template>
  <div class="side-cart-card">
    <img :src="product.image" alt="Product Image" class="product-image" />

    <div class="product-details">
      <h4 class="product-title">{{ product.title }}</h4>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <div class="quantity-controls">
        <button class="qty-btn" @click="decrease">−</button>
        <span class="qty">{{ quantity }}</span>
        <button class="qty-btn" @click="increase">+</button>
      </div>
    </div>

    <button class="remove-btn" @click="$emit('remove', product.id)">×</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { Product } from '@/store/index' // Adjust path as needed

const props = defineProps<{
  product: Product
}>()

</script>

<style scoped lang="scss">
.side-cart-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 12px;
  margin-bottom: 16px;
  position: relative;

  .product-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 12px;
  }

  .product-details {
    flex: 1;

    .product-title {
      font-size: 14px;
      margin: 0;
      font-weight: 600;
    }

    .product-price {
      font-size: 13px;
      color: #666;
      margin: 4px 0;
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      margin-top: 6px;

      .qty-btn {
        background-color: #f0f0f0;
        border: none;
        padding: 4px 8px;
        font-size: 16px;
        border-radius: 6px;
        cursor: pointer;
        margin: 0 4px;

        &:hover {
          background-color: #e0e0e0;
        }
      }

      .qty {
        font-size: 14px;
        min-width: 20px;
        text-align: center;
      }
    }
  }

  .remove-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    color: #888;

    &:hover {
      color: #ff4d4d;
    }
  }
}
</style>
