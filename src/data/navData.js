import {RiFilePaper2Line} from "react-icons/ri";
import {GiSail, GiTrophyCup, GiHummingbird, GiFamilyHouse} from "react-icons/gi";
import {v4 as uuid} from "uuid";
const navData = [
    {
        "id": uuid(),
        'text': "Home",
        'icon': <GiFamilyHouse/>,
        'link': "/",
        'visible': true
    },
    {
        "id": uuid(),
        'text': "Documentation",
        'icon': <RiFilePaper2Line/>,
        'link': "/help",
        'visible': true
    },
    {
        "id": uuid(),
        'text': "Play",
        'icon': <GiSail/>,
        'link': "/play",
        'visible': true
    },
    {
        "id": uuid(),
        'text': "Leaderboard",
        'icon': <GiTrophyCup/>,
        'link': [
            {
                "id": uuid(),
                'text': "Global Rankings",
                'icon': <GiTrophyCup/>,
                'link': "/rankings?global",
                'visible': false
            },
            {
                "id": uuid(),
                'text': "Country Rankings",
                'icon': <GiTrophyCup/>,
                'link': "/rankings?country",
                'visible': false
            }
        ],
        'visible': true
    },
    {
        "id": uuid(),
        'text': "Contact",
        'icon': <GiHummingbird/>,
        'link': "/contact",
        'visible': true
    }
]
export default navData;