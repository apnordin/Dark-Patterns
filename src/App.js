import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path ="/" component={Main} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
