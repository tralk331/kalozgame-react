import React, {useContext, useRef,useState} from 'react'
import {BsChevronDoubleDown} from 'react-icons/bs'
import {HeaderContext} from '../context/HeaderContext'
const HomePage = () => {
    const shipRef = useRef(null)
    const [isScrolled,setIsScrolled] = useState(false);
    const handleScroll = (e) => {
        if (e.target.scrollTop > 2) setIsScrolled(true) 
        else setIsScrolled(false)
      }
    const {toggleAuth} = useContext(HeaderContext)
    return(
        <div className="home-page" onScroll={handleScroll}>
            <div className="home-welcome">
                <div className="title">
                    <h1>Engage in epic battles against other players to determine who's the best pirate.</h1>
                    <button onClick={toggleAuth}>PLAY NOW</button>
                </div>
                {!isScrolled && <BsChevronDoubleDown className="more-content-arrow" onClick={() => shipRef.current.scrollIntoView()}/>}
            </div>
            <div className="home-ships" ref={shipRef}>
                <h1>Unlock unique ships never seen before in a game!</h1>
                {/* <div className="ships-grid">
                    <div className="ship"></div>
                    <div className="ship"></div>
                    <div className="ship"></div>
                </div> */}
            </div>
        </div>
    )
}
export default HomePage