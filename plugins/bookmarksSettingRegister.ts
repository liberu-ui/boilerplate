import { createApp, Component } from 'vue';
import BookmarksState from '@liberu-ui/bookmarks/bulma/components/settings/BookmarksState.vue';

interface Store {
  commit: (mutation: string, payload: any) => void;
}

const app = createApp({});

app.component('setting-bookmarks-state', BookmarksState);

const initializeApp = ({ store }: { store: Store }, inject: any) => {
  console.log(store);
  if (store) {
    store.commit('layout/settings/registerItem', { component: 'setting-bookmarks-state', order: 500 });
  }
};

initializeApp(app, { store });

app.mount('#app');
