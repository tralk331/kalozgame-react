import React from 'react';
import {RiAnchorLine, RiCloseLine, RiAccountBoxFill} from 'react-icons/ri'

const Header = ({navState,toggleNav,toggleAuth}) => {
    return(
        <div className="header">
            <div className="left">
                {navState ?  <RiCloseLine onClick={toggleNav}/> : <RiAnchorLine onClick={toggleNav}/>}
                <RiAccountBoxFill onClick={toggleAuth}/>
            </div>
            <div className="right">
                <h1>Kalózgame</h1>
            </div>
        </div>
    );

}
export default Header