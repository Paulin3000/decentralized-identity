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
    path: "/holder/credentials/:id",
    component: () => import("../pages/holder/credential-detail.vue"),
    name: "credential-detail",
  },
  {
    path: "/holder/request-credential",
    component: () => import("../pages/holder/request-credential.vue"),
    name: "request-credential",
  },
  {
    path: "sharing",
    component: () => import("../pages/holder/sharing.vue"),
    name: "holder-sharing",
  },
  {
    path: "settings",
    component: () => import("../pages/holder/settings.vue"),
    name: "holder-settings",
  },
  {
    path: "help",
    component: () => import("../pages/holder/help.vue"),
    name: "holder-help",
  },
];
