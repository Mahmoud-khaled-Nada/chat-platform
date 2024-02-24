import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/template.bundle.css"
import "./styles/template.dark.bundle.css"
import "./styles/style.css"

const root = ReactDOM.createRoot(
  document.getElementById("root")! as HTMLElement
);

root.render(<App />);
