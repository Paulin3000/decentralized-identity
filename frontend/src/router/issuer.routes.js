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
];
