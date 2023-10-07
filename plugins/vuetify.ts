import { createApp } from 'vue';
import { createVuetify, VuetifyInstance } from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

const app = createApp();

const vuetify: VuetifyInstance = createVuetify();

app.use(vuetify);

app.mount('#app');

export default vuetify;
