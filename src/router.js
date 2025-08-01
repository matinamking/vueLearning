import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

import TemplateUser from "./pages/users/Template.vue";
import IndexUser from "./pages/users/Index.vue";
import ShowUser from "./pages/users/Show.vue";

import TemplatePost from "./pages/posts/Template.vue";
import IndexPost from "./pages/posts/Index.vue";
import ShowPost from "./pages/posts/Show.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/user",
    component: TemplateUser,
    children: [
      { path: "", name: "users", component: IndexUser },
      { path: ":id", name: "userId", component: ShowUser },
    ],
  },
  {
    path: "/post",
    component: TemplatePost,
    children: [
      { path: "", name: "posts", component: IndexPost },
      { path: ":id", name: "postId", component: ShowPost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
