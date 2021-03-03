
import {useState} from 'react';
import './styles/style.scss';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Content from "./components/Content"
import Axios from "axios";
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }
  const [authOpen, setAuthOpen] = useState(false);
  const toggleAuth = () => {
    setAuthOpen(!authOpen)
    setNavOpen(false)
  }

  const sendRequest = async (requestType) => {
    if(requestType === "GET"){
      const res = await Axios.get("http://api.kalozga.me/")
      console.log(res.data)
    }
  }
  return (
    <div className="App">
      <Router>
      <Header navState={navOpen} toggleNav={toggleNav} toggleAuth={toggleAuth}></Header>
      <Navbar navOpen={navOpen}></Navbar>
      <Content></Content>
      {authOpen && <AuthForm/>}
      </Router>
    </div>
  );
}

export default App;
