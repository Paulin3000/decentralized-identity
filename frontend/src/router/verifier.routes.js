export default [
  {
    path: "",
    component: () => import("../pages/verifier/index.vue"),
    name: "verifier",
  },
  {
    path: "requests",
    component: () => import("../pages/verifier/requests.vue"),
    name: "verifier-requests",
  },
];
