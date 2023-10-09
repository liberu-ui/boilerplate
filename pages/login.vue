<template>
  <auth-login-form action="Login" route="login" @success="init" />
</template>
<script setup lang="ts">
import { SignInRequestPayload } from "~/types/app";

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
