import Axios from "axios"
export default async function AddToCart(productId,quantity,price) {
    try {
        //lấy id của user
        const UserIDNotJson = localStorage.getItem('UserID')
        const ProductIDNotJson = localStorage.getItem('ProductId')
        const UserJson = JSON.parse(UserIDNotJson)
        const ProductJson = JSON.parse(ProductIDNotJson)
        const UserID = UserJson.id
        const URL = `http://127.0.0.1:3002/carts/v1/api/add/${UserID}`
        const NewCart = {
            price:price,
            quantity:quantity,
            users: UserID,
            products: ProductJson
        }
        // trả về dữ liệu
        const response = await Axios({
            method: "POST",
            data: NewCart,
            url: URL
        })
        return response
    }
    catch (err) {
        console.log({ messgae: "AddToCart Error" })
    }

}