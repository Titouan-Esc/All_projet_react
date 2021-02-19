import './scss/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets"

function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Contact" component = {Contact} />
          <Route path = "/Projets" component = {Projets} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
