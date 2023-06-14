import ReactDOM from "react-dom/client";
import Counter from "./component/Counter/Counter";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
root.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
   
)