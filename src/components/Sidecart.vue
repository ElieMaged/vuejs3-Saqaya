<template>
  <div class="side-cart-container">
    <div>

    
    <button class="cart-icon" @click="toggleCart">
      🛒
    </button>
    </div>

    <div class="side-cart" :class="{ open: isOpen }">
      <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-btn" @click="toggleCart">×</button>
      </div>
      <div class="cart-body">
        <!-- Cart items -->

        <p v-show="cartEmpty">No items in cart.</p>

        <div v-show="!cartEmpty" v-for="product of cartItems">
          <ul>
           <SideCard
           :key="product.id"
           :product="product"
           />
          </ul>
        </div>
        <p v-show="!cartEmpty">Grand Total :{{ cartTotal }}$</p>
      </div>
    </div>

    <!-- Overlay -->
    <div class="overlay" v-if="isOpen" @click="toggleCart"></div>
  </div>
</template>

<script lang="ts" setup>
// imports
import { ref } from 'vue';
import { createApp } from 'vue'
import { computed } from 'vue'
import { createStore, useStore } from 'vuex'
import SideCard from './SideCard.vue'
const isOpen = ref(false);
const cartEmpty = ref(false);

const store = useStore();

const products = computed(() => store.state.cart);



const cartTotal = computed(() => store.getters.cartTotal);
const cartCount = computed(() => store.getters.cartItemCount);
const cartItems = computed(() => store.getters.cartItems);

// cart toggle
const toggleCart = () => {
  isOpen.value = !isOpen.value;
cartCount.value === 0 ? cartEmpty.value = true : cartEmpty.value = false;
console.log(products.value[0])
};


</script>

<style lang="scss" scoped>
.side-cart-container {
  position: relative;
}

.cart-icon {
  position: relative;
  top: 0px;
  right: 20px;
  font-size: 24px;
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;
  margin-left:1rem;
}

.side-cart {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: #7a7a7a;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1002;
  display: flex;
  flex-direction: column;
   text-align:center;
  &.open {
    right: 0;
  }

  .cart-header {
    
    padding: 16px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
   

    .close-btn {
      font-size: 24px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .cart-body {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
</style>
