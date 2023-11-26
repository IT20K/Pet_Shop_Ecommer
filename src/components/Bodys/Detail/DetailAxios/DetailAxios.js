import Axios from 'axios'
export default async function DetailAxios(){
    try{
        //lấy id product
        const ProductJson = localStorage.getItem('ProductId')
        const ProductId = JSON.parse(ProductJson)
        // gọi sản phẩm từ id product
        const URL = `http://127.0.0.1:3002/products/v1/api/detail/${ProductId}/get`
        const response = await Axios({
            method:'GET',
            url:URL
        })
        //trả dữ liệu về
        const product = response.data
        return product
    }
    catch(err){
        console.log({message:err.message})
    }
}