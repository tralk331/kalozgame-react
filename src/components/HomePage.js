import {BsChevronDoubleDown} from 'react-icons/bs'
const HomePage = ({scrolled}) => {

    return(
        <div className="home-page" >
            <div className="home-welcome">
                <div className="title">
                    <h1>Engage in epic battles against other players to determine who's the best pirate.</h1>
                    <button>PLAY NOW</button>
                </div>
                {!scrolled && <BsChevronDoubleDown className="more-content-arrow"/>}
            </div>
            <div>
                Buzi vagyok
            </div>
        </div>
    )
}
export default HomePage