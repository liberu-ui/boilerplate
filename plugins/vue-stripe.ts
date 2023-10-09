import { createApp, App } from 'vue';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

const app: App = createApp({});
export default (): void => {
  app.component('StripeCheckout', StripeCheckout);
};

app.mount('#app');
