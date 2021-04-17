import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin/Admin';
import Book from './Components/Admin/Admin/Book/Book';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivetRoute/PrivetRoute';
export const userContext = createContext();
function App() {

  const [loginUser, setLoginUser] = useState({});
  return (
    <userContext.Provider value={[loginUser, setLoginUser]} >
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/id/:_id">
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book></Book>
        </PrivateRoute>
        <Route path="/login">
     <Login></Login>
        </Route>
      </Switch>
      </Router>
  
      </userContext.Provider>
  );
}

export default App;
