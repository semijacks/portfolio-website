import HomePage from "./screens/HomePage";
import PortfolioItem from "./screens/PortfolioItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio-item" component={PortfolioItem} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
