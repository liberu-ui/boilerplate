<template>
  <auth-register-form
    action="Register"
    route="register"
    @success="init"
  ></auth-register-form>
  <div></div>
</template>
<script setup lang="ts">
interface SignUpRequestPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

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
