import CardCssContextProvider from "./hooks/CardCSS";
import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardCssContextProvider>
      <React.Suspense fallback={<div><h1>Loading...</h1></div>}>
        <App />
      </React.Suspense>
    </CardCssContextProvider>
  </React.StrictMode>
);
