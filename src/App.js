import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;