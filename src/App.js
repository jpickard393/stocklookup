import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles.scss';
import MenuBar from "../src/components/Menubar/MenuBar";
import QuoteEntryForm from "./components/QuoteEntryForm/QuoteEntryForm";
import MarketNews from "./components/MarketNews/MarketNews";

function App() {
  return (
    <Router>
      <div className="container">
        <MenuBar></MenuBar>
      </div>
      <Route path="/QuoteEntryForm" exact component={QuoteEntryForm} />
      <Route path="/MarketNews" exact component={MarketNews} />
    </Router>
  );
}

export default App;
