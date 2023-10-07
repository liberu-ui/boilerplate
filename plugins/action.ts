/**
 * This module is a plugin for Nuxt.js and provides functions for making HTTP requests.
 * 
 * @module fetchPlugin
 */

import { $get as get, $post as post } from "actions/fetch.ts";

/**
 * Define the Nuxt plugin for the fetch functionality.
 * @param {Object} context - The context object containing the $pinia instance.
 * @returns {Object} - The Nuxt plugin object.
 */
export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      /**
       * A function for making GET requests.
       * @type {Function}
       */
      $get: get,

      /**
       * A function for making POST requests.
       * @type {Function}
       */
      $post: post,
    },
  };
});