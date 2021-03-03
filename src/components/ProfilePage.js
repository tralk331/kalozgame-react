import React, {useEffect, useState} from 'react'
import getUserData from "../data/getUserData"
const ProfilePage = () => {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
            getUserData().then((res) => 
            console.log(res))
    },[])
    return(
        <div className="profile-page">
            {profileData}
        </div>
    )
}

export default ProfilePage