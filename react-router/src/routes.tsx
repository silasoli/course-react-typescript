import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/index";
import { About } from "./pages/about/index";
import { Contact } from "./pages/contact/index";
import { Products } from "./pages/products/index";
import { Product } from "./pages/product/index";
import { NotFound } from "./pages/notFound/index";
import { Layout } from "./components/layout";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };