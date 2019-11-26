import React from 'react';
import './App.css';
import {
   NavLink,
   Route,
   Switch
} from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path={"/login"} render = {()=><Login></Login>}></Route>
      <Home></Home> 
      </Switch>        
    </div>
  );
}

export default App;
