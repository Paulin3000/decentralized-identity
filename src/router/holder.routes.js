export default [
  {
    path: "",
    component: () => import("../pages/holder/index.vue"),
    name: "holder",
  },
  {
    path: "credentials",
    component: () => import("../pages/holder/credentials.vue"),
    name: "holder-credentials",
  },
  {
    path: "credentials/:id",
    component: () => import("../pages/holder/credential-details.vue"),
    name: "holder-credential-details",
  },
  {
    path: "credentilas/request-credential",
    component: () => import("../pages/holder/request-credential.vue"),
    name: "holder-request-credential",
  },
  {
    path: "sharing/:id",
    component: () => import("../pages/holder/sharing.vue"),
    name: "holder-sharing",
  },
  {
    path: "settings",
    component: () => import("../pages/holder/settings.vue"),
    name: "holder-settings",
  },
  {
    path: "info",
    component: () => import("../pages/holder/info.vue"),
    name: "holder-info",
  },
];
