import { CountDep } from "@/pages/CountDep";
import { EmptyDep } from "@/pages/EmptyDep";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/empty-dep",
        element: <EmptyDep />,
      },
      {
        path: "/count-dep",
        element: <CountDep />,
      },
    ],
  },
]);
