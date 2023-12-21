import Axios from 'axios'
export default async function CreateInvoices(totalvalue){
    try {
        // lấy dữ liệu user
        const UserNotJson = localStorage.getItem('UserID')
        const UserJSON = JSON.parse(UserNotJson)
        const UserID = UserJSON.id
        const data = {
            users:UserID,
            total:totalvalue
        }
        // chuẩn bị lấy dữ liệu cart của user 
        const URL = `http://localhost:3002/payments/v1/api/create-order/${UserID}`
        await Axios({
            method: "POST",
            url: URL,
            data:data
        })
    }
    catch(err){
        console.log({message:err.message})
    }
}