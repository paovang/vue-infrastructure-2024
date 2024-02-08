<template>
    <div class="home-layout-view">
      <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">HAL Tech</a>
          <div class="navbar-burger" @click="toggleNavbar" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
          <div class="navbar-end">
            <a href="#about" class="navbar-item brackets">Sobre</a>
            <a href="#portfolio" class="navbar-item brackets">Portfolio</a>
            <a href="https://bound-to-be.blogspot.pt/" target="_blank" class="navbar-item brackets">Blogue</a>
            <a href="http://society6.com/monicagabriel" target="_blank" class="navbar-item brackets">Loja</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <a href="http://society6.com/monicagabriel" target="_blank" class="navbar-item brackets">Loja</a>
          </div>
        </div>
      </nav>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue';

    const isNavbarActive = ref(false);

    const toggleNavbar = async () => {
      isNavbarActive.value = !isNavbarActive.value;
    }
</script>

<style scoped>
  @import 'bulma/css/bulma.css';

    .navbar {
      padding: 0px 80px 0px 80px;
    }

    @media only screen and (max-width: 767px) {
      .navbar {
        padding: 0;
      }
    }

  

    .home-layout-view {
      padding: 0px 0px 0px 10px;
    }

    /* .navbar {
      background-color: #ff2f00;
    } */
    /* .navbar-brand a {
      color: white !important;
    } */
    /* .navbar-menu a {
      color: white !important;
      background-color: #ff2f00;
    }
    .navbar-menu a:hover {
      background: black !important;
    }
    .navbar-brand .navbar-burger {
      color: white !important;
    } */
</style>
