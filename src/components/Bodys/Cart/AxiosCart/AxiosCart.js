import Axios from 'axios';

export default async function AxiosCart() {
  try {
    // Lấy dữ liệu user
    const UserNotJson = localStorage.getItem('UserID');
    const UserJSON = JSON.parse(UserNotJson);
    const UserID = UserJSON.id;
    // Chuẩn bị lấy dữ liệu cart của user
    const URL = `http://127.0.0.1:3002/carts/v1/api/read/${UserID}`;
    const response = await Axios({
      method: 'GET',
      url: URL,
    });
    // Bỏ id danh sách sản phẩm vào một mảng mới
    const carts = response.data;
    const products = carts.map((cart) => cart._id); 

    // Trả về sản phẩm từ id của sản phẩm
    const SucessData = await Promise.all(
      products.map(async (product) => {
        // Thêm một mảng mới
        const ProductRender = [];
        const URL1 = `http://127.0.0.1:3002/carts/v1/api/read/${product}/product`;
        const productJson = await Axios({
          method: 'GET',
          url: URL1,
        });
        // Cho vào một mảng mới
        const ProductData = productJson.data;
        ProductRender.push(ProductData);
        return ProductData;
      })
    );
    return SucessData;
  } catch (err) {
    console.log({ message: err.message });
    return [];
  }
}