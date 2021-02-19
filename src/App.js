import './scss/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>
          <Route path="/" exact component = {Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
