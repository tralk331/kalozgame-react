import React , {useState, useContext} from 'react'
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";
import ProfilePage from "./ProfilePage"
import {  Switch, Route} from 'react-router-dom'
import {UserContext} from "../context/UserContext"
const Content = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const handleScroll = (e) => {
        if (e.target.scrollTop > 2){
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    const {user} = useContext(UserContext);
    return(
        <div className="content" onScroll={handleScroll}>
        <Switch>
          <Route exact path="/">
            <HomePage scrolled={isScrolled}></HomePage>
          </Route>
          <Route exact path="/play">
            <PlayPage></PlayPage>
          </Route>
          <Route exact path="/profile">
            {user === null ? <span>Please log in!</span> : <ProfilePage/>}
          </Route>
        </Switch>
        </div>
    )

}

export default Content;