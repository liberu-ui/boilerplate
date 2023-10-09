<template>
  <auth-register-form
    action="Register"
    route="register"
    @success="init"
  ></auth-register-form>
  <div></div>
</template>
<script setup lang="ts">
import { SignUpRequestPayload } from "~/types/app";

const payload = reactive<SignUpRequestPayload>({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});
const layout = "auth";
function init() {
  // TO DO implement init function
}
</script>
