import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useState} from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Profiles from "./components/profiles";
import User from "./components/user";
function App() {
  //step1 install react router dom
  //step2: import Router, Route
  //step3: coordinate the path with the requested component 
  //step4: we link the routing action to an element 

  const [login, setLogin]=useState(false)

  const loginHandler =()=>{
setLogin(
  login=!login
)
  }

  return (
    <div className='App'>
      <Router>
        <Navbar  loginHandler={loginHandler} />
        
<Route path='/' exact  component={Home}/>
<Route path='/aboutUs' component={AboutUs}/>
<Route path='/profiles' exact  component={Profiles}/>
<Route path='/profiles/:ID' component={User}/>

        
      </Router>
    </div>
  );
}

export default App;
