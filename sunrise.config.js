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
      host:
        getEnv('VUE_APP_CT_AUTH_HOST') ||
        'https://auth.europe-west1.gcp.commercetools.com',
      projectKey:
        getEnv('VUE_APP_CT_PROJECT_KEY') || 'poc-consum',
      credentials: {
        clientId:
          getEnv('VUE_APP_CT_CLIENT_ID') ||
          'SNLGw7jdg0G3HL6_bnoBY-Yx',
        clientSecret:
          getEnv('VUE_APP_CT_CLIENT_SECRET') ||
          'IAeHgx-G7Bama6nW9Kp9YTNA3aY8SD6Y',
      },
      scope:
        getEnv('VUE_APP_CT_SCOPE') ||
        'manage_project:poc-consum',
    },
    api:
      getEnv('VUE_APP_CT_API_HOST') ||
      'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    en: 'English',
    de: 'Deutsch',
  },
  countries: {
    DE: 'Deutschland',
    US: 'United States',
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      US: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      DE: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    {
      name: 'size',
      type: 'text',
      label: {
        it: 'Size',
        de: 'Größe',
        en: 'Size',
      },
    },
    {
      name: 'color',
      type: 'lnum',
      component: 'colors',
      label: {
        de: 'Farbe',
        it: 'Color',
        en: 'Color',
      },
    },
    {
      name: 'designer',
      type: 'enum',
      component: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
  ],
  detailAttributes: [
    {
      name: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
    {
      name: 'colorFreeDefinition',
      label: {
        it: 'Color',
        de: 'Farbe',
        en: 'Color',
      },
    },
    {
      name: 'size',
      label: {
        it: 'Size',
        de: 'Grösse',
        en: 'Size',
      },
    },
    {
      name: 'style',
      label: {
        it: 'Style',
        de: 'Stil',
        en: 'Style',
      },
    },
    {
      name: 'gender',
      label: {
        it: 'Gender',
        de: 'Zielgruppe',
        en: 'Gender',
      },
    },
    {
      name: 'articleNumberManufacturer',
      label: {
        it: 'Manufacturer AID',
        de: 'Herstellernummer',
        en: 'Manufacturer AID',
      },
    },
  ],
  variantSelector: ['color', 'size'],
  variantInProductName: ['size'],
  ...localConfig,
};
// eslint-disable-next-line no-console
console.log('using config:', config);
export default config;
