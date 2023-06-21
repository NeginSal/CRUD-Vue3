import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "users",
    component: () => import("./components/UserList")
  },
  {
    path: "/users/:id",
    name: "editUser",
    component: () => import("./components/EditUser")
  },
  {
    path: "/addUser",
    name: "addUser",
    component: () => import("./components/AddUser")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;