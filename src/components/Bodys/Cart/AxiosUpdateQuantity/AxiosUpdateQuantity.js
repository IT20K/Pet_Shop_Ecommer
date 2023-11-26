import Axios from 'axios'
export default async function AxiosUpdateQuantity(value,id){
    try {
        // lấy dữ liệu user
        const UserNotJson = localStorage.getItem('UserID')
        const UserJSON = JSON.parse(UserNotJson)
        const UserID = UserJSON.id
        //chuẩn bị lấy dữ liệu cart của user 
        const URL = `http://127.0.0.1:3002/carts/v1/api/update/${UserID}/${id}`
        const NewQuantity = {
            quantity:value
        }
        const response = await Axios({
            method: "POST",
            url: URL,
            data:NewQuantity
        })
        // bỏ id danh sách sản phẩm vào một mảng mới
        const carts = response.data
        return carts
    }
    catch(err){
        console.log({message:err.message})
    }
}