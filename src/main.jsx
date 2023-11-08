import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ChartProvider from "./context/ChartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChartProvider>
    <App />
  </ChartProvider>
);
