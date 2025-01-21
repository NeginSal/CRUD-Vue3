import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "users",
        component: () => import("./components/HomePage.vue")
    },
    {
        path: "/user/:id",
        name: "editUser",
        component: () => import("./components/EditUser")
        // props: true
    },
    {
        path: "/addUser",
        name: "addUser",
        component: () => import("./components/AddUser")
    },
    {
        path: "/users/:id",
        name: "userDetail",
        component: () => import("./components/UserDetail")
    }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;