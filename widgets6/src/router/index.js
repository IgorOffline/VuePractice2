import { createRouter, createWebHistory } from "vue-router";
import Accordion from "../components/Accordion.vue";
import Search from "../components/Search.vue";
import Dropdown from "../components/Dropdown.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accordion",
      component: Accordion,
      props: {
        items: [
          {
            title: "Title1",
            content: "Content1",
          },
          {
            title: "Title2",
            content: "Content2",
          },
          {
            title: "Title3",
            content: "Content3",
          },
        ],
      },
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/dropdown",
      name: "dropdown",
      component: Dropdown,
      props: {
        options: [
          {
            label: "CRed",
            value: "red",
          },
          {
            label: "CGreen",
            value: "green",
          },
          {
            label: "CBlue",
            value: "blue",
          },
        ],
      },
    },
  ],
});

export default router;
