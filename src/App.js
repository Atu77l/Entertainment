import React,{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';import {NavLink as Link} from 'react-router-dom';
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import './App.css';
import Calculator from './Calculator/Calculator';
import Notes from './Notes/Notes';
import Navbar from './Navbar/Navbar';
import Game from './Game/Game/Game.jsx';
import Footer from'./Footer/Footer';



const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  
  var time1=   new Date().toLocaleTimeString();

  const [ctime,setTime] = useState(time1);

  const Update = () => {
    time1 = new  Date().toLocaleTimeString();
    setTime(time1);
  };

  setInterval(Update,1000);
  return(
    <>
    <h1 className="header1">Welcome to Atul Kesharwani Website</h1>
    <h2 className="time"> {ctime}</h2>
    <Router>
       <Navbar />
      <Switch>
        <Route exact path='/'  component={Calculator} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/notes' component={Notes} />
        <Route path='/game' component={Game}/>
      </Switch>
    </Router>
    <Footer/>
    </>
  );
};
export default App;
