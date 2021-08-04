import { HashRouter as Router} from 'react-router-dom'
import NavigationBar from './components/NavegationBar'
import Routes from './components/Routes'


function App() {
  return (
    <Router>
       <div className="App">
        <NavigationBar />
        <Routes />
       </div>
    </Router>
  );
}

export default App;
