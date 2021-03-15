import "./styles/base/_base.scss";
import './styles.scss';
//import { Container } from "reactstrap";
import MenuBar from "../src/components/Menubar/MenuBar";

function App() {
  return (
    <div className="container">
      <MenuBar></MenuBar>
      {/* <QuoteEntryForm></QuoteEntryForm> */}
    </div>
  );
}

export default App;
