
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
    retrieveProfileData()
    setTimeout(function(){
      window.scrollTo(0, 1);
  }, 0);
  },[]);
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }
  const [authOpen, setAuthOpen] = useState(false);
  const toggleAuth = () => {
    setAuthOpen(!authOpen)
    setNavOpen(false)
  }
  const [user, setUser] = useState(null)
  const retrieveProfileData = async () => {
    if (localStorage.getItem("authToken") == null) return null;
    try{
      const res = await Axios.get("http://api.kalozgame.probaljaki.hu/getprofile", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("authToken")
        }
      })
      if (res.status === 200){
        if (res.data.profilePicturePath === null) res.data.profilePicturePath = csabi
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
              <Header navState={navOpen} toggleNav={toggleNav} toggleAuth={toggleAuth}></Header>
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
