import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext'
import {MdExitToApp} from 'react-icons/md'
import {Link} from 'react-router-dom'
const ProfileHeaderDropdown = () => {
    const {retrieveProfileData} = useContext(UserContext);
    const LogOut = () => {
        localStorage.removeItem('authToken')
        setTimeout(retrieveProfileData,100)
    }
    return(
        <div className="profile-header-dropdown">
                <Link to="/profile">
                    <span>Profile</span>
                </Link>
                <Link to="/inbox">
                    <span>Messages</span>
                </Link>
                <Link to="/settings">
                    <span>Settings</span>
                </Link>
                <Link to="/" onClick={LogOut}>
                    <MdExitToApp/>
                    <span>Log Out</span>
                </Link>
        </div>
    )
}

export default ProfileHeaderDropdown