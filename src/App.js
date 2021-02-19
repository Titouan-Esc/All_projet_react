import './scss/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';


// const routes = [
//   {path}
// ]

function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>
          <div className="App">
            
          </div>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
