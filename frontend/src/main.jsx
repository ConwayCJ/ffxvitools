import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import CraftPlanner from "./components/features/routes/craftplanner/CraftPlanner";
import Home from "./components/features/routes/home/Home";
import Error from "./components/features/routes/Error";
import Eureka from "./components/features/routes/deepdungeons/eureka/Eureka";
import EurekaMaps from "./components/features/routes/deepdungeons/eureka/EurekaMaps";
import Zadnor from "./components/features/routes/deepdungeons/zadnor/Zadnor";
import ZadnorMaps from "./components/features/routes/deepdungeons/zadnor/ZadnorMaps";
import Bozja from "./components/features/routes/deepdungeons/bozja/Bozja";
import BozjaMaps from "./components/features/routes/deepdungeons/bozja/BozjaMaps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/craft',
        element: <CraftPlanner />
      },
      {
        path: '/bozja',
        element: <Bozja />,
        children: [{
          path: '/bozja/maps',
          element: <BozjaMaps />
        }]
      },
      {
        path: '/eureka',
        element: <Eureka />,
        children: [{
          path: '/eureka/maps',
          element: <EurekaMaps />
        }]
      },
      {
        path: '/zadnor',
        element: <Zadnor />,
        children: [{
          path: '/zadnor/maps',
          element: <ZadnorMaps />
        }]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);