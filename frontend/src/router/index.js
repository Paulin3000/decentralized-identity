import { createRouter, createWebHistory } from "vue-router";
import holderRoutes from "./holder.routes";
import issuerRoutes from "./issuer.routes";
import verifierRoutes from "./verifier.routes";

const routes = [
  {
    path: "/",
    redirect: "/holder", // Default redirect to holder
  },
  {
    path: "/holder",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: holderRoutes,
  },
  {
    path: "/issuer",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: issuerRoutes,
  },
  {
    path: "/verifier",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: verifierRoutes,
  },
  {
    path: "/settings",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/settings.vue"),
        name: "settings",
      },
    ],
  },
  {
    path: "/help",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/help.vue"),
        name: "help",
      },
    ],
  },
  {
    path: "/playground",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/playground.vue"),
        name: "playground",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
