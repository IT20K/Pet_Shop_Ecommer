import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosProduct from './AxiosProduct/AxiosProduct';
import image from '../../../logo.svg'
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
        <div id="CardProduct">
            <div className="d-flex flex-wrap" id="productContainer">
                {products.map((product, index) => (
                    <div className="card w-25 p-3 mt-2 mb-2" key={index}>
                        <img
                            src={`http://localhost:3002/${product.ImageDisplay}`}
                            className="card-img-top "
                            alt="Fissure in Sandstone"
                            
                        />
                        <div className="card-body">
                            <h5 className="card-title ProductName">{product.productname}</h5>
                            <p className="card-text ProductCurrent">{product.currency}</p>
                            <Link to={`/detail/${product._id}`} className="btn btn-primary" id="detail" onClick={() => handleButtonClick(product._id)}>
                                Button
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}