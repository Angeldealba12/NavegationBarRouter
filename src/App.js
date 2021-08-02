import { BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import NavigationBar from './components/NavegationBar'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import FAQ from './components/FAQ'

function App() {
  return (
    <Router>
       <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/home" extract>
          <Home />  
          </Route>
          <Route path="/about">
          <About />  
          </Route>
          <Route path="/f.a.q">
          <FAQ />  
          </Route>
          <Route path="/store">
          <Store />   
          </Route>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
