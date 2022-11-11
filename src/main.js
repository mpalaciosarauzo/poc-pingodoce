import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import { apolloClient } from './apollo';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import i18n from './i18n';
import 'presentation/assets/scss/main.scss';
import store from './store';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
      libraries: 'places',
    },
  })
  .use(i18n)
  .use(router)
  .use(store);

app.mount('#app');
