import { createApp, App } from 'vue';
import toastr from '@liberu-ui/toastr';

const app: App = createApp({});

app.config.globalProperties.$toastr = toastr;

export default app;
