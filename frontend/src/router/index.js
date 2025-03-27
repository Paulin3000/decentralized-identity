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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 };

    // Or if you want to restore saved position when using back/forward:
    /*
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    */
  },
});

export default router;
