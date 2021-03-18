
import './App.css';
import Body from './Components/Body/Body';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
      <Switch>
        <Route exact path="" component={Body} />
        </Switch>
  );
}

export default App;
