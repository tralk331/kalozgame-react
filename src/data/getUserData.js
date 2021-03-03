import axios from 'axios'

const getUserData = async () => {
    const token = `Bearer ${localStorage.getItem("authToken")}`
    try{
        const res =  await axios.get("http://localhost:4000/getuser.php",  {
        headers: {
          "Content-Type": 'application/json',
          "Authorization": token
        }
       })
       return res.data
    } catch(error){
        return error.response.data
    }
}
export default getUserData