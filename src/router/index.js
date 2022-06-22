import { createRouter, createWebHistory } from 'vue-router';
// import pixel from "@/views/pixel/";

const routes = [
  // {
  //   path: '/pixel',
  //   name: 'home',
  //   component: pixel
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
