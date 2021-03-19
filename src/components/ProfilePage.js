import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from "../context/UserContext"
import gold from "../assets/csabigold.png"
import xp from "../assets/xp.png"
const ProfilePage = () => {
    const history = useHistory()
    useEffect(() => {
        if (user === null){
            history.push("/")
        }
    })
    const {user} = useContext(UserContext);
    return(
        <div className="profile-page">
            <div className="profile-top">
                <img src={user.profilePicturePath} alt="Profile"></img>
                <div id="profileName">{user.username}</div>
            </div>
            <div className="profile-stats">
                <img src={gold} alt=""></img>
                {user.gold}
                <img src={xp} alt=""></img>
                {user.experience}
            </div>
            <div className="match-history">
                <div className="match-history-title">
                    Match history
                </div>
                <div className="match-history-content">
                    <div className="match">Match history not avaliable yet!</div>
                    <div className="match"></div>
                    <div className="match"></div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage