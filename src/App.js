import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Create from './components/Create'
import Detail from './components/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route exact path= '/pokemons/:id' component= {Detail}/>
        <Route path= '/pokemons' component= {Create}/>
        <Route path= '/home' component= {Home}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
