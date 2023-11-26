import Axios from "axios";
export default async function DeleteAxios(cartID) {
    try {
        const UserJson = localStorage.getItem('UserID')
        const UserParse = JSON.parse(UserJson)
        const UserID = UserParse.id
        const URL = `http://127.0.0.1:3002/carts/v1/api/delete/${UserID}/${cartID}`
        const response = await Axios({
            method: "POST",
            url: URL
        })
        return response.data
    }
    catch (err) {
        console.log({ message: "Delete Error" })
    }
}