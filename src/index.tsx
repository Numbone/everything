import ReactDOM from "react-dom/client";
import Counter from "./component/Counter/Counter";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
root.render(
    <div>
      <Counter/>
    </div>
)