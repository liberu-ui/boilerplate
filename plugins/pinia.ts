/**
 * This is a Nuxt.js plugin that provides the pinia stores for the Vue components.
 */

/**
import { defineNuxtPlugin } from "@nuxtjs/composition-api";
**/
import {
  useMaintStore,
  useAuthStore,
  useLayoutStore,
  MainStore,
  AuthStore,
  LayoutStore
} from "~/store";

/**
 * Plugin function that initializes and provides the pinia stores.
 * @param {Object} context - The Nuxt context object.
 */
export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: {
        /**
         * The main store instance.
         * @type {MainStore}
         */
        main: useMaintStore($pinia) as MainStore,

        /**
         * The auth store instance.
         * @type {AuthStore}
         */
        auth: useAuthStore($pinia) as AuthStore,

        /**
         * The layout store instance.
         * @type {LayoutStore}
         */
        layout: useLayoutStore($pinia) as LayoutStore
      },
    },
  };
});
