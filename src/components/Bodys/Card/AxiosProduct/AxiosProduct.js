import Axios from 'axios';

export default async function AxiosProduct() {
  try {
    // lấy dữ liệu của sản phẩm 
    const URL = 'http://127.0.0.1:3002/products/v1/api/detail';
    const response = await Axios({
        method:'GET',
        url:URL
    });
    // trả về dữ liệu sản phẩm
    const AllProducts = response.data;
    return AllProducts;
  } catch (err) {
    console.log({ message: err.message });
    return [];
  }
}