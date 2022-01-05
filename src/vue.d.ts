import OneAuth from "oneauth-sdk-core";
declare module "vue/types/vue" {
  interface Vue {
    /** Displays a global notification message at the upper right corner of the page */
    $oneAuth: OneAuth;
  }
}
