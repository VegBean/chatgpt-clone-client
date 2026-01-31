import { createBrowserRouter } from "react-router";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import None from "./pages/none";
import Chat from "./pages/chat";

const router = createBrowserRouter([
  {
    path: "/home",
    Component: Layout, // 父路由
    children: [
      {
        path: "",
        Component: Home, // 子路由
      },
      {
        path: "chat",
        Component: Chat,
      },
      {
        path: "none",
        Component: None,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);

export default router;
