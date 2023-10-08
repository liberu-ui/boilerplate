import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "md",
      aliases,
      sets: { md },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
