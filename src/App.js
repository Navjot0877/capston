import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Signup from './signup/page/Signup';
import Login from './login/page/Login';
import Homepage from'./Welcome/welcome'
//import Welcome from './Welcome/welcome.js';

const App = () => {

  const [user, setLogInUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login setLogInUser={setLogInUser}/>
            </Route>
          <Route path="/register"><Signup/></Route>
          <Route exact path="/">
            {
              user && user._id
              ?
              <Homepage/>
              :
              <Login setLogInUser={setLogInUser}/>
            }
          </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App;
