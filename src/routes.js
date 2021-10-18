import Home from "./pages/Home";
import Todos from "./pages/Todos";
import CreateTodoForm from "./pages/CreateTodoForm";
import HelloWorld from "./components/HelloWorld";
import ChangeName from "./pages/ChangeName";
import Counter from "./components/Counter";
import Input from "./pages/Input";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import * as VueRouter from "vue-router";

export const routes = [
  { path: "/zdarov", component: Home },
  { path: "/zdarov/zdarov", component: Home },
  { path: "", component: Home },
  { path: "/", component: Home },
  { path: "/todos", component: Todos, props: true },
  {
    path: "/createTodo",
    component: CreateTodoForm,
    props: true,
    children: [{ path: "/createTodo/test", component: HelloWorld }]
  },
  { path: "/changeName", component: ChangeName },
  { path: "/counter", component: Counter },
  { path: "/input", component: Input },
  { path: "/users", component: Users },
  { path: "/:catchAll(.*)", component: NotFound }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
