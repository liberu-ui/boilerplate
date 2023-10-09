import { createApp, App } from 'vue';

import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

interface AppOptions {
  number: string;
  theme_color: string;
  locale: string;
}

const app: App = createApp({});
app.use(VueSocialChat, {
  number: '2089062604669120',
  theme_color: '#333333',
  locale: 'en_US',
} as AppOptions);

export default app;
