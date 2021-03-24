
import './App.css';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import SalesforeProducts from  './Components/SalesforceProducts/SalesforceProducts';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SalesforeProducts" component={SalesforeProducts}/>

      </Switch>
  );
}

export default App;
