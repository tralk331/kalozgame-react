import React , {useState} from 'react'
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";
import ProfilePage from "./ProfilePage"
import {  Switch, Route} from 'react-router-dom'

const Content = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const handleScroll = (e) => {
        if (e.target.scrollTop > 2){
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    return(
        <div className="content" scroll onScroll={handleScroll}>
        <Switch>
          <Route exact path="/">
            <HomePage scrolled={isScrolled}></HomePage>
          </Route>
          <Route exact path="/play">
            <PlayPage></PlayPage>
          </Route>
          <Route exact path="/profile">
            <ProfilePage/>
          </Route>
        </Switch>
        </div>
    )

}

export default Content;