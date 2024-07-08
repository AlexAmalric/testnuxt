// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
  plugins: [],
  runtimeConfig: {
    // the app secret
    mag_secret_1: process.env.MAG_SECRET,
    mag_secret_2: process.env.MAG_SECRET2,
    // The private keys which are only available server-side
    xamanApiKey: process.env.XAMAN_API_KEY,
    xamanSecretKey: process.env.XAMAN_SECRET_KEY,
    xrplCommonsAddress: process.env.XRPL_COMMONS_ADDRESS,
    xrplCommonsSecret: process.env.XRPL_COMMONS_SECRET,
    TESTNET_wssExplorer: process.env.TESTNET_WSS_EXPLORER,
    MAINNET_wssExplorer: process.env.MAINNET_WSS_EXPLORER,

    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  ssr: false,
  css: [
    '~/assets/fonts/clash-display.css',
  ]
})