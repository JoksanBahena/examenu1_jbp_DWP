import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/landing",
    component: () => import("../components/Landing.vue"),
  },
  {
    path: "/inicio",
    component: () => import("../components/Inicio.vue"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../components/Welcome.vue"),
      },
      {
        path: "/table",
        name: "table",
        component: () => import("../components/Tabla.vue"),
      },
      {
        path: "/form",
        name: "form",
        component: () => import("../components/Formulario.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
