
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/Board';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Instructions from './Components/Instructions';
import Pokemon from './Components/Pokemon';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Header />
            <Switch>
              <Route path="/instructions">
                <Instructions />
              </Route>
              <Route path="/pokemon/:id">
                <Pokemon />
              </Route>
              <Route path="/">
                <Board />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
  );
}

export default App;
