import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavAndButton from './components/NavAndButton';
import Montaigne from './pages/Montaigne';
import Oiseaux from './pages/Oiseaux';
import Plage from './pages/Plage';
import Bouffe from './pages/Bouffe';
import scss from './scss/style.scss';



function App() {
  return (
      <Router>
         <main>
          <NavAndButton/>
          <Switch>
            <Route path="/" exact component= {Bouffe}/>
            <Route path="/Montaigne" component={Montaigne}/>
            <Route path="/Oiseaux" component={Oiseaux} />
            <Route path="/Plage" component={Plage}/>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
