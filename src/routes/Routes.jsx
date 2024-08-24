import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../pages/Home";
import HarryPotter from "../pages/HarryPotter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/harry-potter",
        element: <HarryPotter />,
      },
    ],
  },
]);

export default router;
