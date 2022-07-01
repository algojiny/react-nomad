import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route basename={process.env.PUBLIC_URL} path="/movie/:id">
          <Detail />
        </Route>
        <Route basename={process.env.PUBLIC_URL} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
//d03c23d6eaf9db44f392bcd814e4efa0
