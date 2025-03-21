import { Fragment } from "react/jsx-runtime";
import Button from "./components/ui/Button/index";
import Home from "./components/pages/Home/index";

const App = () => {
  return (
    <Fragment>
      <h1>
        Hallo <i>Mega</i>
      </h1>
      <button>submit</button>
      <Button>click me</Button>
      <Home />
    </Fragment>
  );
};

export default App;
