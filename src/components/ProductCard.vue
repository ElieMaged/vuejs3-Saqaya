<template>
  <div class="product-card">
    <img src='' alt="" class="product-image" />
    <div class="product-info">
      <h3 class="product-name"></h3>
      <p class="product-description"></p>
      <div class="product-footer">
        <span class="product-price"></span>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Product {
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
}

defineProps<{
  product: Product
}>()
</script>

<style scoped lang="scss">
.product-card {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: 200px;
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
</style>
