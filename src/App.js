
import './App.css';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/About" component={About} />
      </Switch>
  );
}

export default App;
