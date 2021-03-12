import React from 'react';
import 
{
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import ClubDetails from './Components/ClubDetails/ClubDetails';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path="/">
            <Home />
        </Route>
        
        <Route path="/home">
            <Home />
        </Route>

        <Route path="/clubInfo/:clubId">
           <ClubDetails />
        </Route>
        
        <Route path="*">
           <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

