<template>
  <auth-login-form action="Login" route="login" @success="init" />
</template>
<script setup lang="ts">
interface SignInRequestPayload {
  email: string;
  password: string;
  remember: boolean;
}

const payload = reactive<SignInRequestPayload>({
  email: "",
  password: "",
  remember: false,
});

const layout = "auth";

function init() {
  // TO DO implement init function
}
</script>
