import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupPage from "./Components/Signuppage"
import {Switch,Route} from "react-router-dom"
import routes from "./routes"
import Dashboard from './Components/Dashboard';
import EditPage from "./Components/Edit-page"
import DeletePage from "./Components/DeletePage"

function App() {
  return (
    <>
    <Switch>
      <Route path={routes.edit}>
      <EditPage/>
      </Route>

      <Route path={routes.delete}>
      <DeletePage/>
      </Route>

      <Route path={routes.dashboard}>
        <Dashboard />
      </Route>

      <Route path={routes.home}>
        <SignupPage />
      </Route>
      
    </Switch>
    </>
  );
}

export default App;
