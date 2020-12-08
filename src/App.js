import HomePage from "./screens/HomePage";
import PortfolioItem from "./screens/PortfolioItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio-item" component={PortfolioItem} />
      </Switch>
    </Router>
  );
}

export default App;
