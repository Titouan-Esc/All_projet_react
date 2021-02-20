import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavAndButton from './components/NavAndButton';
import Montaigne from './pages/Montaigne';
import Oiseaux from './pages/Oiseaux';
import Plage from './pages/Plage';
import Bouffe from './pages/Bouffe';
import scss from './scss/style.scss';



function App() {
  return (
    <main>
      <Router>
        <NavAndButton/>
        <Switch>
          <Route path="/" exact Component= {Bouffe}/>
          <Route path="/Montaigne" Component={Montaigne}/>
          <Route path="/Oiseaux" Component={Oiseaux} />
          <Route path="/Plage" Component={Plage}/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
