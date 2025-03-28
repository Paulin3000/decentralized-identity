export default [
  {
    path: "",
    component: () => import("../pages/issuer/index.vue"),
    name: "issuer",
  },
  {
    path: "dashboard",
    component: () => import("../pages/issuer/dashboard.vue"),
    name: "issuer-dashboard",
  },
  {
    path: "requests",
    component: () => import("../pages/issuer/requests.vue"),
    name: "issuer-requests",
  },
  {
    path: "credentials",
    component: () => import("../pages/issuer/credentials.vue"),
    name: "issuer-credentials",
  },
  {
    path: "/holder/credentials/:id",
    component: () => import("../pages/issuer/credential-detail.vue"),
    name: "credential-detail",
  },
  {
    path: "settings",
    component: () => import("../pages/issuer/settings.vue"),
    name: "issuer-settings",
  },
  {
    path: "help",
    component: () => import("../pages/issuer/help.vue"),
    name: "issuer-help",
  },
];
