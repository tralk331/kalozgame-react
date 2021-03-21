
import {useState, useEffect} from 'react';
import './styles/style.scss';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Content from "./components/Content";
import ProfileHeaderDropdown from './components/ProfileHeaderDropdown';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import {UserContext} from './context/UserContext';
import {HeaderContext} from './context/HeaderContext';
import Axios from 'axios';
import csabi from "./assets/csabi.jpg"
function App() {
  
  

  useEffect(() =>{
    retrieveProfileData() //Reload profile data on page load
  },[]);

  //Manage the navigation bar's open/close state

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  //Manage the authentication form's open/close state

  const [authOpen, setAuthOpen] = useState(false);
  const toggleAuth = () => {
    setAuthOpen(!authOpen)
    setNavOpen(false)
  }

  //Global user state(useContext)


  const [user, setUser] = useState(null)

  //Get the user data from the server

  const retrieveProfileData = async () => {

    //Only get the user data if the authorization token is set
    //Otherwise, if it was set but the use logged out, reset the user state

    if (localStorage.getItem("authToken") == null) {
      setUser(null)
      return
    }

    //Axios request to the server

    try{
      const res = await Axios.get("http://api.kalozgame.probaljaki.hu/getprofile", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("authToken")
        }
      })

      //If the server responds, we check for the status code just in case something messes up with catching the error

      if (res.status === 200) {

        //If they haven't set a profile picture yet, a default static picture will be set

        if (res.data.profilePicturePath === null) res.data.profilePicturePath = csabi

        //If everything is fine, we can modify the user state

        setUser(res.data)
      }
    } catch (error){
      if (error.response.data === "Please verify your e-mail address!") setUser("unverified")
    }
    
  }
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{user , retrieveProfileData}}>
            <HeaderContext.Provider value={{navOpen,toggleNav,toggleAuth}}>
              <Header></Header>
              <Navbar navOpen={navOpen}></Navbar>
              <CSSTransition in={authOpen} classNames="auth-form" timeout={200}>
                {user === null ? <AuthForm/> : <ProfileHeaderDropdown></ProfileHeaderDropdown>}
              </CSSTransition>
              <Content></Content>
            </HeaderContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
