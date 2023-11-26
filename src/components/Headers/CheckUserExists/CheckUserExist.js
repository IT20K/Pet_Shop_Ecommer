import Axios from 'axios'
export default  async function CheckUserExist (navigationbar){
 try{
    const UserID = localStorage.getItem('UserID')
    const UserIDJson = JSON.parse(UserID)
    const ID = UserIDJson.id
  
    // lấy dữ liệu 
    // const URL = `http://127.0.0.1:3002/users/v1/api/details/${ID}`
    // const user = await Axios({
    //     method:'GET',
    //     url:URL,
    // })
    // const UserData = user.data
    // console.log(UserData)

 }
 catch(err){
    console.log({message:err.message})
 } 
}