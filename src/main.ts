import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import OneAuth from "@oneauth/sdk-core";
import OneAuthVue from "@oneauth/sdk-vue";
const oneAuth = new OneAuth({
  issuer: `kang.oneauth.cn/oauth/v1`,
  clientId: `2YXXZ78611K0c8906MX6RJ8c0s84VcQB`,
  redirectUri: `http://localhost:8080/callback`,
  scopes: ["openid", "profile", "email"],
});

Vue.use(OneAuthVue, {
  oneAuth,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
