
import './App.css';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import SalesforeProducts from  './Components/SalesforceProducts/SalesforceProducts';
import Carrier from './Components/Carrier/Carrier';
import Contact from './Components/Contact/Contact';
import SapProducts from './Components/SapProducts/SapProducts';
import {Switch,Route,useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Body} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SalesforeProducts" component={SalesforeProducts}/>
        <Route exact path="/Career" component={Carrier}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/SapProducts" component={SapProducts}/>
      </Switch>
      </AnimatePresence>
  );
}

export default App;
