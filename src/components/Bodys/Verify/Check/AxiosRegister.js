import Axios from 'axios'
import { toast } from "react-hot-toast";

export default async function AxiosRegister(FormRegister) {
    try {
        const registerUsername = FormRegister.querySelector('#registerUsername').value
        const registerEmail = FormRegister.querySelector('#registerEmail').value
        const registerPassword = FormRegister.querySelector('#registerPassword').value
        const NewUser = {
            username: registerUsername,
            password: registerPassword,
            email: registerEmail,
        }

        const URL = 'http://127.0.0.1:3002/users/v1/api/create'
        const user= await Axios({
            method: "POST",
            data: NewUser,
            url: URL
        })

        /// check request users
        if(user.status === 200){
            console.log('dữ liệu đã lưu trữ thành công')
        }
        else{
            console.log('dữ liệu lưu trữ thất bại')
        }
        
    }
    catch (err) {
        console.log({ message: err.message })
    }
}

