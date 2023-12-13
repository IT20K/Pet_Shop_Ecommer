import Axios from 'axios'
export default async function AxiosLogin(FormLogin) {
    try {
        // gửi yêu cầu xác minh và nhận dữ liệu
        const LoginEmail = FormLogin.querySelector('#LoginEmail').value
        const LoginPassword = FormLogin.querySelector('#LoginPassword').value

        const NewUser = {
            email: LoginEmail,
            password: LoginPassword,
        }
        const URL = 'http://127.0.0.1:3002/users/v1/api/login'
        const User = await Axios({
            method: "POST",
            data: NewUser,
            url: URL
        })

        //kiểm tra trạng thái
        if (User.status === 200) {
            console.log("Dữ liệu đã đúng")
        }
        else {
            console.log("Dữ liệu sai")
        }

        // chuẩn bị data để hiển thị
        const UserID = User.data._id
        const CustomerRequest = { id: UserID }
        // lưu trữ data

        if (!localStorage.getItem('UserID')) {
            localStorage.setItem('UserID', JSON.stringify(CustomerRequest))
        }


    }
    catch (err) {
        console.log({ message: err.message })
    }

}
