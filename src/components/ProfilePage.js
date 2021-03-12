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
                <img src={user.profilePicturePath} alt="Profile picture"></img>
                {user.username}
            </div>
            <div className="profile-stats">
                <img src={gold}></img>
                {user.gold}
                <img src={xp}></img>
                {user.experience}
            </div>
        </div>
    )
}

export default ProfilePage