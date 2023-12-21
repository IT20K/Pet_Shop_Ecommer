import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosProduct from './AxiosProduct/AxiosProduct';

export default function Card() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const allProducts = await AxiosProduct();
            setProducts(allProducts);
        }
        fetchData();
    }, []);
    const handleButtonClick = async (productId) => {
        localStorage.setItem('ProductId', JSON.stringify(productId))
    };

    return (
        <>
            <div className='d-flex justify-content-between mt-2 mb-2 '>
                <h1>Best Seller</h1>
                <h1><i className="fa-solid fa-arrow-right"></i></h1>

            </div>
            <div id="CardProduct">
                <div className="d-flex flex-wrap" id="productContainer">
                    {products.map((product, index) => (
                        <div className="card w-25 p-3 mt-2 mb-2" key={index} style={{ height: "350px" }}>
                            <div className='h-50'>
                                <img
                                    src={`http://localhost:3002/${product.ImageDisplay}`}
                                    className="card-img-top w-100 h-100"
                                    alt="Fissure in Sandstone"
                                />
                            </div>
                            <div className="card-body h-50">
                                <h5 className="card-title ProductName h-25">{product.productname}</h5>
                                <p className="card-text ProductCurrent h-25">{product.currency}</p>
                                <div className=' h-50'>

                                    <Link to={`/detail/${product._id}`} className="btn btn-primary" id="detail" onClick={() => handleButtonClick(product._id)}>
                                        Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}