import React from "react";
import ReactDOM from "react-dom/client";

// IMPORTING MATERIAL DESIGN BOOTSTRAP
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// IMPORTING MAIN APP COMPONENT
import App from "./App";

// IMPORTING CUSTOM CSS STYLE SHEET
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
