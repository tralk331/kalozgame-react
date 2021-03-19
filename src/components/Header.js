import React, {useContext} from 'react';
import {RiAnchorLine, RiCloseLine, RiAccountBoxFill} from 'react-icons/ri';
import {UserContext} from '../context/UserContext';
import {HeaderContext} from '../context/HeaderContext'

const Header = () => {
    const userContext = useContext(UserContext);
    const {navOpen,toggleNav,toggleAuth} = useContext(HeaderContext);
    return(
        <div className="header">
            <div className="left">
                {navOpen ?  <RiCloseLine onClick={toggleNav}/> : <RiAnchorLine onClick={toggleNav}/>}
                {userContext.user === null ? <RiAccountBoxFill onClick={toggleAuth}/> : 
                <div className="profileBanner" onClick={toggleAuth}>
                    <img src={userContext.user.profilePicturePath} alt=""></img>
                    <span>{userContext.user.username}</span>
                </div>
                }
            </div>
            <div className="right">
                <h1>Kalozgame</h1>
            </div>
        </div>
    );

}
export default Header