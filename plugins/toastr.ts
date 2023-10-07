import { createApp, App } from 'vue';
import toastr from '@enso-ui/toastr';

const app: App = createApp({});

app.config.globalProperties.$toastr = toastr;

export default app;
