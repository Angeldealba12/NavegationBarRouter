import { Switch, Route} from 'react-router-dom'

  import Home from './Home'
  import About from './About'
  import Store from './Store'
  import FAQ from './FAQ'

const Routes = () => {
    return (
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
    )
}

export default Routes