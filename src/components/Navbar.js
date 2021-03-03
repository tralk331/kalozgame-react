import React from "react";
import {useState, useEffect} from 'react';
import NavLink from "./NavLink";
import NavDrop from "./NavDrop";
import navData from "../data/navData";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Navbar = ({navOpen}) => {
    const [navItemData, setNavItemData] = useState([])
    useEffect(
        () => initNavItems(),[]
    )
    const initNavItems = () => {
        const visibleItems = navData.filter(data => data.visible === true);
        setNavItemData(visibleItems);
    }
    const setNavItemsVisible = (sender,toggleState) => {
        let senderIndex = navItemData.map(s => s.id).indexOf(sender)
        const filtered = [...navItemData]
        const senderChilds = navData.filter(data => data.id === sender)[0].link
        if (toggleState){         
            console.log(senderChilds.length)
            senderChilds.forEach(child => {
                filtered.splice(senderIndex+senderChilds.length-1,0,child)
            })
        }
        else{
            filtered.splice(senderIndex+senderChilds.length-1,senderChilds.length)
        }
        setNavItemData(filtered)
    }
    return(
        <CSSTransition in={navOpen} timeout={200} classNames="navbar-container">
            <div className="navbar-container">
                <ul className="navbar">
                    <TransitionGroup component={null}>
                    {navItemData.map(data => {
                            if (typeof data.link === "string") {
                                return (
                                    <CSSTransition key={data.id} timeout={300} classNames="nav-item">
                                        <NavLink id={data.id} text={data.text} icon={data.icon} link={data.link}/>
                                    </CSSTransition>
                                )
                            }
                            else{
                                return (
                                    <CSSTransition key={data.id} timeout={300} classNames="nav-item">
                                        <NavDrop id={data.id} text={data.text} icon={data.icon} children={data.link} toggleChild={setNavItemsVisible}/> 
                                    </CSSTransition>
                                )
                            } 
                        })}
                    </TransitionGroup>
                </ul>

            </div>
        </CSSTransition>

    );
}
export default Navbar