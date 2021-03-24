import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles.scss';
import MenuBar from "../src/components/Menubar/MenuBar";
import QuoteEntryForm from "./components/QuoteEntryForm/QuoteEntryForm";
import MarketNews from "./components/MarketNews/MarketNews";
import WatchList from "./components/WatchList"
import { Container } from "reactstrap";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    <Router>
      <Container>
        <ErrorBoundry>
          <MenuBar></MenuBar>
        </ErrorBoundry>
      </Container>
      <Route path="/" exact component={MarketNews} />
      <Route path="/QuoteEntryForm" exact component={QuoteEntryForm} />
      <Route path="/MarketNews" exact component={MarketNews} />
      <Route path="/WatchList" exact component={WatchList} />
    </Router>
  );
}

export default App;
