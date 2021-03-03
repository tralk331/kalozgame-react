import react from "react";
import { Link } from "react-router-dom"
const NavLink = ({id,text,icon,link}) => {
    return(
        <li className="nav-item">
            <Link to={link}>
                <div>
                    {icon}
                    {text}
                </div>
            </Link>
        </li>
    );
}
export default NavLink