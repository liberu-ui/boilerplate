<<<<<<< HEAD:plugins/toastr.js
import { createApp } from "vue";
import toastr from "@liberu-ui/toastr";
=======
import { createApp, App } from 'vue';
import toastr from '@liberu-ui/toastr';
>>>>>>> main:plugins/toastr.ts

const app: App = createApp({});

app.config.globalProperties.$toastr = toastr;

export default app;
