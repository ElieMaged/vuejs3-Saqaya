<script setup lang="ts">
import { ref } from 'vue'



document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger") as HTMLButtonElement | null;
  const navLinks = document.getElementById("nav-links") as HTMLUListElement | null;

  if (!hamburger || !navLinks) {
    console.error("Navbar elements not found.");
    return;
  }

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("navbar__links--show");
  });
});


</script>

<template>
<nav class="navbar">
  <button class="navbar__hamburger" id="hamburger">☰</button>

  <ul class="navbar__links" id="nav-links">
    <li class="navbar__item">
      <a href="#" class="navbar__link">
        <span class="navbar__icon"></span>Home
      </a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link">
        <span class="navbar__icon"></span>Products
      </a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link">
        <span class="navbar__icon"></span>Contact Us
      </a>
    </li>
    
  </ul>

      <div class=""><img class="svg" src="../assets/dna.svg" alt="dna-picture"></div>

  <div class="sign-in">
    <div class="sign-in__word">Sign In</div>
    <div class=""><img class="svg" src="../assets/cart.svg" alt="cart-"></div>
  </div>
</nav>


</template>

<style>

</style>
