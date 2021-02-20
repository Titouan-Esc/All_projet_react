import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavAndButton from './components/NavAndButton';
import scss from './scss/style.scss';



function App() {
  return (
    <main>
      <Router>
        <NavAndButton/>
        <Switch>

        </Switch>
      </Router>
    </main>
  );
}

export default App;
