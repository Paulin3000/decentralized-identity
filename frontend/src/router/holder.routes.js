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
    path: "sharing",
    component: () => import("../pages/holder/sharing.vue"),
    name: "holder-sharing",
  },
];
