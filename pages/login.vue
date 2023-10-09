<template>
  <auth-login-form action="Login" route="login" @success="init" />
</template>
<script setup lang="ts">
const payload = reactive({
  email: "",
  password: "",
  remember: false,
});

const layout = "auth";

function init() {
  // TO DO implement init function
}
</script>
