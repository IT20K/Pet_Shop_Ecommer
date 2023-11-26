import Axios from 'axios'
export default async function AxiosIDCart(){
    try {
        // lấy dữ liệu user
        const UserNotJson = localStorage.getItem('UserID')
        const UserJSON = JSON.parse(UserNotJson)
        const UserID = UserJSON.id
        //chuẩn bị lấy dữ liệu cart của user 
        const URL = `http://127.0.0.1:3002/carts/v1/api/read/${UserID}`
        const response = await Axios({
            method: "GET",
            url: URL
        })
        // bỏ id danh sách sản phẩm vào một mảng mới
        const carts = response.data
        return carts
    }
    catch(err){
        console.log({message:err.message})
    }
}