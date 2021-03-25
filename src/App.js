import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Welcome from "./pages/Welcome";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path ="/" component={Welcome} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
