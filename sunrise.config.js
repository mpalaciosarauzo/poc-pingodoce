const getEnv = (env) => {
  return typeof global?.Cypress?.env === 'function'
    ? global.Cypress.env(env)
    : process.env[env];
};
let localConfig = {};
if (getEnv('VUE_APP_LOCAL_SUNRISE_CONFIG')) {
  localConfig = require(process.env
    .VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}
const config = {
  ct: {
    // auth: {
    //   host:
    //     getEnv('VUE_APP_CT_AUTH_HOST') ||
    //     'https://auth.europe-west1.gcp.commercetools.com',
    //   projectKey:
    //     getEnv('VUE_APP_CT_PROJECT_KEY') || 'poc-consum',
    //   credentials: {
    //     clientId:
    //       getEnv('VUE_APP_CT_CLIENT_ID') ||
    //       'rOzs7bZvrMhE56S1OPPop-i-',
    //     clientSecret:
    //       getEnv('VUE_APP_CT_CLIENT_SECRET') ||
    //       'L6VHj6G8SV3ye3_4Du1XNqadh_cuGhHg',
    //   },
    //   scope:
    //     getEnv('VUE_APP_CT_SCOPE') ||
    //     'manage_my_profile:poc-consum ' +
    //     'create_anonymous_token:poc-consum ' +
    //     'manage_my_payments:poc-consum ' +
    //     'manage_my_shopping_lists:poc-consum ' +
    //     'manage_my_orders:poc-consum ' +
    //     'view_products:poc-consum ',
    // },
    auth: {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'poc-pingo-doce',
      credentials: {
        // clientId: 'eunYkNNTiS2vuI7fMzl1zYIE',
        // clientSecret: 'UiPozTfLVi4-J07D8ZCwT45aa6saGbot',
        clientId: 'vIvp21FnDIw1eyxlTHzj8WSA',
        clientSecret: 'TKX0CJylsWcJd9XBdwM35b9uKSjz_XXX',
      },
      // scope: 'manage_my_payments:poc-pingo-doce manage_my_shopping_lists:poc-pingo-doce manage_my_quotes:poc-pingo-doce manage_my_business_units:poc-pingo-doce view_categories:poc-pingo-doce manage_my_orders:poc-pingo-doce view_published_products:poc-pingo-doce manage_my_profile:poc-pingo-doce manage_my_quote_requests:poc-pingo-doce create_anonymous_token:poc-pingo-doce',
      scope: 'manage_project:poc-pingo-doce',
    },
    api: 'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    es: 'Spanish',
    pt: 'Português'
    // en: 'English',
    // de: 'Deutsch',
  },
  countries: {
    ES: 'Spain',
    PT: 'Portugal'
    // DE: 'Deutschland',
    // US: 'United States',
  },
  formats: {
    number: {
      ES: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      PT: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      // DE: {
      //   currency: {
      //     style: 'currency',
      //     currency: 'EUR',
      //     currencyDisplay: 'symbol',
      //   },
      // },
      // US: {
      //   currency: {
      //     style: 'currency',
      //     currency: 'USD',
      //   },
      // },
    },
    datetime: {
      ES: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      PT: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
      }
      // US: {
      //   short: {
      //     year: 'numeric',
      //     month: 'short',
      //     day: 'numeric',
      //   },
      // },
      // DE: {
      //   short: {
      //     year: 'numeric',
      //     month: 'short',
      //     day: 'numeric',
      //   },
      // },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    { name: 'Marca', type: 'text', component: 'brand' },
    { name: 'weight', type: 'number', component: 'weight' },
    { name: 'tipo_de_corte', type: 'text', component: 'cutType' }
  ],
  detailAttributes: [
    {
      name: 'tipo_de_corte',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
        pt: 'Tipo de Corte'
      },
    },
    {
      name: 'weight',
      label: {
        it: 'Color',
        de: 'Farbe',
        en: 'Color',
        pt: 'Peso em gramas'
      },
    },
    {
      name: 'production_origin',
      label: {
        it: 'Size',
        de: 'Grösse',
        en: 'Size',
        pt: 'Produção'
      },
    },
    {
      name: 'conservation',
      label: {
        it: 'Style',
        de: 'Stil',
        en: 'Style',
        pt: 'Conservação'
      },
    },
    {
      name: 'composition',
      label: {
        it: 'Gender',
        de: 'Zielgruppe',
        en: 'Gender',
        pt: 'Composição Química'
      },
    },
    {
      name: 'consumption_suggestions',
      label: {
        it: 'Manufacturer AID',
        de: 'Herstellernummer',
        en: 'Manufacturer AID',
        pt: 'Sugestões de Consumo'
      },
    },
  ],
  variantSelector: ['color', 'size', 'Marca', 'weight', 'tipo_de_corte'],
  variantInProductName: ['size'],
  ...localConfig,
};
// eslint-disable-next-line no-console
console.log('using config:', config);
export default config;
