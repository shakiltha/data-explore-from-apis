import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/helloWorld",
        element: "hello World",
      },
    ],
  },
]);

export default router;
