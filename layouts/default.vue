<template>
  <v-app>
    <!-- <loader /> -->
    <!-- <document-title /> -->
    <fade>
      <NavBar />
      <slot />
      <Footer />
    </fade>
  </v-app>
</template>

<script>
import { Fade } from "@liberu-ui/transitions";
//import DocumentTitle from "@liberu-ui/ui/src/core/components/DocumentTitle.vue";
//import Loader from "@liberu-ui/ui/src/bulma/components/Loader.vue";
</script>
