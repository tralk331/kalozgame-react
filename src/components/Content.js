import React , {useState, useContext,useEffect} from 'react'
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";
import ProfilePage from "./ProfilePage"
import PageNotAvaliable from "./PageNotAvaliable"
import {Switch, Route, useHistory} from 'react-router-dom'
import {UserContext} from "../context/UserContext"
const Content = () => {
    
    const history = useHistory();

    const {user} = useContext(UserContext);
    useEffect(() => {
      if (user === "unverified") history.push("/unverified")
    },[user])
    return(
        <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/play">
            <PlayPage></PlayPage>
          </Route>
          <Route exact path="/profile">
            {user === null ? <span>Please log in!</span> : <ProfilePage/>}
          </Route>
          <Route exact path="/unverified">
            <div className="unverified">
              Please verify your e-mail address
            </div>
          </Route>
          <Route component={PageNotAvaliable}/>
        </Switch>
        </div>
    )

}

export default Content;