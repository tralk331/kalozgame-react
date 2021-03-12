import React from 'react';
import {useState} from 'react'
import {BsChevronDoubleDown} from "react-icons/bs"
const NavDrop = ({id,text,icon,children,toggleChild}) => {
    const [toggleDrop, setToggleDrop] = useState(false);
    const toggleState = () => {
        const current = toggleDrop
        setToggleDrop(!toggleDrop)
        return !current;
    }
    return(
        <li className="nav-item" onClick={() => toggleChild(id,toggleState())}>
                <div>
                    {icon}
                    {text}
                    <BsChevronDoubleDown className="drop-icon"></BsChevronDoubleDown>
                </div>             
        </li>
    );
}
export default NavDrop