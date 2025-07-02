<script setup lang="ts">
import { ref } from 'vue'
import SideCart from './Sidecart.vue';
import { useRouter } from 'vue-router'


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

const router = useRouter();

function goToHome() {
router.push('/')
}

</script>

<template>
<nav class="navbar">
  <button class="navbar__hamburger" id="hamburger">☰</button>

  <ul class="navbar__links" id="nav-links">
    <li class="navbar__item">
      <a href="/" class="navbar__link">
        <span @click="goToHome()" class="navbar__icon"></span>Home
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
    <SideCart />
    <br>
    <br>
    <div class="sign-in__word">Sign In</div>
    
  </div>
</nav>


</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  color: rgb(0, 0, 0);
  position: relative;
  border-bottom: 1px solid black;

  &__hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    background: none;
    border: none;
    color: rgb(0, 0, 0);
  }

  &__links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    &--show {
      display: flex;
    }

    .navbar__item {
      margin-left: 1rem;

      .navbar__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgb(0, 0, 0);
        padding: 0.5rem;

        .navbar__icon {

          display: inline-block;
        }
      }
    }
  }
// media
  @media (max-width: 768px) {
    &__hamburger {
      display: block;
    }

    &__links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      color:black;

      .navbar__item {
        margin: 0;
        border-top: 1px solid #444;
      }
    }

    &__links--show {
      display: flex;
    }

    
}
  }






.sign-in {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &__word {
        width: 100%;
    }
    
}

.svg {
    width: 20px;
    margin-left: 1rem;
}



</style>
