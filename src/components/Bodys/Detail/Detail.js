import React, { useState, useEffect } from 'react'
import DetailAxios from './DetailAxios/DetailAxios'
import AddToCart from './AddToCart/AddToCart';
export default function Detail() {
    const [products, setProducts] = useState({});
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        async function fetchData() {
            const product = await DetailAxios()
            setProducts(product)
        }
        fetchData()
    }, [])

    // khi án vào lập tức thu thập dữ liệu để xử lý
    const handleClick = async (productId) => {
        // lấy số lượng sản phẩm
        const product_price = document.querySelector('.product_price').textContent
        const price = Number(product_price)
        //thêm vào hàm xử lý
        AddToCart(productId,quantity, price)
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
      };
    return (
        <>
            <div className="row m-2">
                <div className="col-lg-2 order-lg-1 order-2">
                    <ul className="image_list list-unstyled">
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" >
                            <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="" className="w-100" /></li>
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg">
                            <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg" alt="" className="w-100" /></li>
                        <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg">
                            <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg" alt="" className="w-100" /></li>
                    </ul>
                </div>
                <div className="col-lg-4 order-lg-2 order-1">
                    <div className="image_selected"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="" /></div>
                </div>
                <div className="col-lg-6 order-3">
                    <div className="product_description">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Products</a></li>
                                <li className="breadcrumb-item active">Accessories</li>
                            </ol>
                        </nav>
                        <div className="product_name">{products.productname}</div>
                        <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
                        <div> <span className="product_price" name="price">{products.currency}</span> <strike className="product_discount"> <span >₹ 2,000<span> </span></span></strike> </div>
                        <div> <span className="product_saved">You Saved:</span> <span >₹ 2,000<span> </span></span></div>
                        <div> <span className="product_info">EMI starts at ₹ 2,000. No Cost EMI Available<span><br /> <span className="product_info">Warranty: 6 months warranty<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">In Stock: 25 units sold this week<span> </span></span></span></span></span></span></span></span></span></span></div>
                        <div>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="br-dashed">
                                        <div className="row">
                                            <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                                            <div className="col-md-9 col-xs-9">
                                                <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7"> </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6" > <span className="product_options">RAM Options</span><br /> <button className="btn btn-primary btn-sm">4 GB</button> <button className="btn btn-primary btn-sm">8 GB</button> <button className="btn btn-primary btn-sm">16 GB</button> </div>
                                <div className="col-xs-6" > <span className="product_options">Storage Options</span><br /> <button className="btn btn-primary btn-sm">500 GB</button> <button className="btn btn-primary btn-sm">1 TB</button> </div>
                            </div>
                        </div>
                        <div className="order_info d-flex flex-row">
                            <form action="#">
                            </form></div>
                        <div className="row">
                            <div className="col-xs-6 mt-2 mb-2" >
                                <div className="product_quantity"> <span>QTY: </span>
                                    <input id="quantity_input" type="number" name='quantity' value={quantity}
                                        onChange={handleQuantityChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <form action='/' method='post' id='AddToCart' onSubmit={(e) => {
                                    e.preventDefault()
                                }} >
                                    <button type="submit" className="btn btn-primary shop-button" onClick={() => handleClick(products._id)} >Add to Cart</button>
                                </form>
                                <button type="button" className="btn btn-success shop-button">Buy Now</button>
                                <div className="product_fav btn btn-danger m-2"><i className="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}