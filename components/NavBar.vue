<template>
  <div
    class="navbar is-fixed-top"
    :class="{ clearHeader: isClear, darkHeader: isDark }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="~assets/images/logo1.svg" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <nav class="navbar-end" style="margin-right: 0 !important">
        <a data-scroll class="navbar-item" href="#home"> Home </a>
        <a data-scroll class="navbar-item" href="#features"> Features </a>
        <a data-scroll class="navbar-item" href="#why"> Why Family Tree 365 </a>
        <a data-scroll class="navbar-item" href="#overview"> Overview </a>
        <NuxtLink to="/blog" class="navbar-item"> Blog </NuxtLink>
        <NuxtLink to="/dashboard" class="navbar-item" v-if="isAuth">
          Dashboard
        </NuxtLink>
        <NuxtLink to="/login" class="navbar-item" v-if="!isAuth">
          Sign in
        </NuxtLink>

        <a v-else @click.prevent="logoutAccount" class="navbar-item">
          Log Out</a
        >
        <div class="navbar-item" v-if="!isAuth">
          <div class="buttons">
            <NuxtLink
              to="/register"
              class="button theme-button has-background-secondary has-text-weight-medium has-text-white"
            >
              Create an account
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAuth = ref(false);
const isDark = ref(false);
const isClear = ref(true);
function logoutAccount() {
  // TO DO add logic for logging out user
}

function handleScroll() {
  if (window.scrollY >= 10) {
    isClear.value = false;
    isDark.value = true;
  } else {
    isClear.value = true;
    isDark.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import "~/assets/css/base.css";
@media screen and (max-width: 1006px) {
  .navbar.is-fixed-top {
    display: inline !important;
  }
}

#home {
  background: url("~/assets/images/main-hero.webp") #4fcf8d no-repeat;
}
</style>
