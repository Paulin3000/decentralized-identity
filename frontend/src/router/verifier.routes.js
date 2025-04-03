export default [
  {
    path: "",
    component: () => import("../pages/verifier/index.vue"),
    name: "verifier",
  },
  {
    path: "dashboard",
    component: () => import("../pages/verifier/dashboard.vue"),
    name: "verifier-dashboard",
  },
  {
    path: "requests",
    component: () => import("../pages/verifier/requests.vue"),
    name: "verifier-requests",
  },
  {
    path: "settings",
    component: () => import("../pages/verifier/settings.vue"),
    name: "verifier-settings",
  },
  {
    path: "help",
    component: () => import("../pages/verifier/help.vue"),
    name: "verifier-help",
  },
];
