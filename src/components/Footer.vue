<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
    <footer class="footer">
<span class="footer__one">

    <div class="footer__one__row">   
     <div class=footer__one__row__news>        
       <h2 id="head1">Join Our Newsletter</h2>
       <p>Join Our very exciting newsletter!</p>
     </div>

    <div class=footer__one__row--email>        
       <input placeholder="Your E-mail" type="text" class="footer__one--input">
       <button id="btn1" class=footer__one--button>Submit</button>
     </div>

    </div>
</span>

<div class="footer__second">

<div class="footer__two">
  
    <!-- list1 -->
<ul>
<li><h2>Navigation</h2></li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>

</ul>

<!-- list2 -->

<ul>
<li><h2>Navigation</h2></li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>

</ul>

<!-- list3 -->

<ul>
<li><h2>Navigation</h2></li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>
<li>
    Navigation
</li>

</ul>

</div>
<div class="footer__second--address">
    <h2>399 Crowfield Road,</h2>
    <h2>Pheonix Arizona B5012</h2>
    <a href="#">asdasdad@hotmail.com</a>
</div>
</div>


    </footer>
</template>

<style lang="scss" scoped >
.footer {
    display: flex;
    flex-direction: column;
    margin: 0px;
    &__one {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       background-color: rgb(255, 255, 255);
       margin: 0;
       &__row {
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        margin: 1rem;
        &__news {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
       }
       
    }
&__two {
        display: flex;
        flex-direction: row;
    }
    &__two > ul {
        list-style: none
    }
}


@media (max-width: 700px) {
  .footer {
    &__one__row {
    display: flex;
    flex-direction: column;
    }
    &__second {
      display: flex;
    flex-direction: column;
   justify-content: space-around;
      
    }
    &__two {
    display: flex;
    flex-direction: column;

    }
ul > li {
     text-align:center;
}
  }

}
.footer {
  &__one--input {
    &__:focus {
        border:none;
        border-color: transparent;
    }
  border: none;
  border-color: transparent;
  border-bottom:1px solid #444;
  padding-left: 1rem;
  padding-left: 1rem;
  width:100%;
  }
&__one--button {
  border: none !important;
  border-color: transparent !important;
  background-color: black;
  color: white;
  padding-top: .5rem;
  padding-bottom: .5rem;
  width:50%;
  cursor: pointer;
  box-shadow: 5px 10px;
}
&__one__row--email {
display: flex;
flex-direction: column;
margin: 1rem;
}
&__second {
    text-align: right;
    display:flex;
    flex-direction: col;
    justify-content: space-around;
     background-color: #d400ff;
 text-align: center;
 &--address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:end;
    margin-right: 1rem;
    margin-bottom: 1rem;
 }
}
}

ul > li {
    text-align:left;
    margin-top: 1rem;
}









</style>