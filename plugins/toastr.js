import { createApp } from "vue";
import toastr from "@liberu-ui/toastr";

const app = createApp({});

app.config.globalProperties.$toastr = toastr;

export default app;
