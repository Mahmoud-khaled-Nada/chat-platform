import ReactDOM from "react-dom/client";

import "./styles/template.bundle.css"
import "./styles/template.dark.bundle.css"
import "./styles/style.css"
import router from "./router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")! as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
