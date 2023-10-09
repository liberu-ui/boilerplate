<template>
  <footer class="px-5 footer">
    <div class="container">
      <div class="footer-cta columns is-gapless mb-0 pb-6">
        <div class="column is-7">
          <h1 class="is-size-2 has-text-primary has-text-weight-bold mb-3">
            Start Your Free Tree Now!
          </h1>
          <div class="is-size-6 has-text-white has-text-weight-regular">
            Your first tree is 100% free! If you need more, we offer affordable
            upgrades via our simple subscription plans. Need help? We can assist
            you to get started and explain Family Tree 365 features. Any issues?
            You can always contact our support team.
          </div>
        </div>
        <div class="footer-action column is-5 is-flex ai--c jc--fe">
          <NuxtLink
            to="/register"
            v-if="!isAuth"
            class="button theme-button theme-button-xl has-background-primary has-text-weight-medium has-text-white"
          >
            Create Your Own Tree
          </NuxtLink>
        </div>
      </div>
      <div class="footer-seprator"></div>
      <div class="columns is-multiline is-variable is-6 py-6 mb-0">
        <div class="column is-4">
          <img
            src="~assets/images/footer-logo.svg"
            width="180px"
            class="mb-5"
          />
          <div
            class="is-size-7 has-text-light has-text-weight-regular"
            style="line-height: 1.4rem"
          >
            Copyright &copy; Family Tree 365 Ltd,<br />
            Kemp House, 82 James Carter Road, Mildenhall, Suffolk, IP28 7DE<br />
            Company number: 14652026
          </div>
          <p class="mt-2">
            <a
              href="https://www.facebook.com/familytree365"
              target="_blank"
              class="is-size-7 has-text-link is-flex"
            >
              <i class="fab fa-facebook mr-2" style="margin-top: 0.2rem"></i
              >Follow us on Facebook
            </a>
          </p>
        </div>
        <div class="column is-5">
          <h1 class="is-size-5 has-text-white has-text-weight-bold mb-5">
            Quick Links
          </h1>
          <div class="columns is-gapless is-multiline is-flex fd--r">
            <div class="column is-flex fd--c">
              <NuxtLink to="/" class="is-size-7 has-text-link mb-2"
                >Home</NuxtLink
              >
              <a href="#features" class="is-size-7 has-text-link mb-2"
                >Features</a
              >
              <a href="#why" class="is-size-7 has-text-link mb-2"
                >Why Family Tree 365?</a
              >
              <a href="#" class="is-size-7 has-text-link mb-2">About</a>
            </div>
            <div class="column is-flex fd--c">
              <NuxtLink to="/login" class="is-size-7 has-text-link mb-2"
                >Sign in</NuxtLink
              >
              <NuxtLink to="/privacy" class="is-size-7 has-text-link mb-2"
                >Privacy Policy</NuxtLink
              >
              <NuxtLink
                to="/termsandconditions"
                class="is-size-7 has-text-link mb-2"
                >Terms &amp; Conditions</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="column is-3">
          <h1 class="is-size-5 has-text-white has-text-weight-bold mb-5">
            Contact Details
          </h1>
          <div class="is-flex ml-1 mb-4">
            <i class="fas fa-envelope mr-2 has-text-primary"></i>
            <a
              href="mailto:support@familytree365.com"
              class="is-size-7 has-text-link"
            >
              support@familytree365.com</a
            >
          </div>
          <div class="is-flex mb-4">
            <!-- <img src="img/mobile.svg" alt="" class="ml-2 mr-2"> -->
            <i class="fas fa-mobile-alt ml-2 mr-2 has-text-primary"></i>
            <a
              href="tel:+44 20 8064 1187"
              class="is-size-7 has-text-link is-flex"
            >
              +44 20 8064 1187</a
            >
          </div>
          <div class="is-flex ml-1 mb-5">
            <i class="fab fa-whatsapp mr-2 has-text-primary"></i>
            <a
              href="https://api.whatsapp.com/send?phone=+44 20 8064 1187"
              class="is-size-7 has-text-link is-flex"
            >
              +44 20 8064 1187</a
            >
          </div>
        </div>
      </div>
      <div class="footer-seprator"></div>
      <div class="content has-text-centered pt-6">
        <div class="columns is-gapless">
          <div class="column has-text-centered is-flex-desktop-only">
            <p class="is-size-7 has-text-light has-text-weight-regular">
              Copyright &copy; {{ new Date().getFullYear() }} Genealogy Websites
              Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const isAuth = ref(false);
</script>

<style scoped></style>
