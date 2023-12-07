import React, { useState, useEffect } from 'react'
import AxiosCart from './AxiosCart/AxiosCart'
import DeleteAxios from './Delete/DeleteAxios'
import AxiosIDCart from './AxiosIDCart/AxiosIDCart'
import AxiosOnDeleteAll from './AxiosOnDeleteAll/AxiosOnDeleteAll'
import AxiosUpdateQuantity from './AxiosUpdateQuantity/AxiosUpdateQuantity'
import { Link } from 'react-router-dom'
export default function Cart() {
    // cart sản phẩm
    const [carts, setCart] = useState([])
    // cart id của cart
    const [cartID, setCartID] = useState([])
    // tổng thành tiền
    const [sum, setSum] = useState("$")
    // xử lý số lượng 
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const cart = await AxiosCart()
            setCart(cart)
            const cartID = await AxiosIDCart()
            setCartID(cartID)
        }
        fetchData()
        const Summary = async () => {
            let Total = 0
            await carts.forEach((cart, index) => {
                const sum = cartID[index]?.quantity * cartID[index]?.price
                Total += sum
                return setSum(Total)
            })
        }
        Summary()
    }, [])
    // xoá hết từ cart của users đến carts
    const OnDeleteAll = async () => {
        await AxiosOnDeleteAll()
    }

    // thay đổi số lượng
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    // tăng số lượng 
    const Increase = async (e) => {
        const button = e.target;
        const parent = button.parentElement;
        const id = button.getAttribute("data-id");
        var value = parseInt(parent.querySelector(".inputValue").value, 10);
        // parseInt chuyển đổi chuỗi thành số nguyên
        // syntax parseIndex(string, radix)
        // radix mặc định là 10 ( cơ số chuyển đổi ) --> khong bao gồm ký tự
        value = isNaN(value) ? 0 : value;
        value++;
        parent.querySelector(".inputValue").value = value;
        AxiosUpdateQuantity(value, id)
    }
    
    // giảm số lượng
    const Decrease = async (e) => {
        
        const button = e.target;
        const parent = button.parentElement;
        const id = button.getAttribute("data-id");
        var value = parseInt(parent.querySelector(".inputValue").value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 1) {
            value--;
        }
        parent.querySelector(".inputValue").value = value;
        AxiosUpdateQuantity(value, id)
    }


    return (
        <>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to={'/products'} className="text-body"><i
                                                className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have 4 items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                                </div>
                                            </div>
                                            {
                                                carts.map((cart, index) => (
                                                    <div className="card mb-3" key={index}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center w-100 justify-content-start">
                                                                    <div className="w-25">
                                                                        <img
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                            className="img-fluid rounded-3" alt="Shopping item" />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <h5>{cart.productname}</h5>
                                                                        <p className="small mb-0">256GB, Navy Blue</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center w-100 justify-content-end">
                                                                    <div className='d-flex'>
                                                                        <button
                                                                            className='btn btn-primary'
                                                                            data-id={cartID[index]?._id}
                                                                            onClick={Increase}
                                                                        >
                                                                            +
                                                                        </button>
                                                                        <input type='text' value={cartID[index]?.quantity || 1} name='quantity' id='QuantityInput' className='inputValue'
                                                                            onChange={(e) => handleQuantityChange(e)} />
                                                                        <button
                                                                            className='btn btn-primary'
                                                                            data-id={cartID[index]?._id}
                                                                            onClick={Decrease}
                                                                        >
                                                                            -
                                                                        </button>
                                                                    </div>
                                                                    <div >
                                                                        <h5 className="mb-0 m-2">{cart.currency}</h5>
                                                                    </div>
                                                                </div>
                                                                <form action='/' method='post' id='DeleteOutCart' onSubmit={(e) => {
                                                                    e.preventDefault()
                                                                }} >
                                                                    <button className='btn btn-danger' type="submit" onClick={() => DeleteAxios(cartID[index]._id)}><i className="fas fa-trash-alt"></i></button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <form action='/' method='post' onSubmit={(e) => {
                                                e.preventDefault()
                                            }}>
                                                <button className='btn btn-danger' type='submit' onClick={OnDeleteAll} >DeleteAll</button>
                                            </form>

                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            className="img-fluid rounded-3" alt="Avatar" />
                                                    </div>
                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" className="form-control form-control-lg" siez="17"
                                                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                            <label className="form-label" htmlFor="typeText">Card Number</label>
                                                        </div>

                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" id="typeExp" className="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                                                    <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" id="TypeType" className="form-control form-control-lg"
                                                                        placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                                    <label className="form-label" htmlFor="TypeType">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <div className="my-4">

                                                        <div className="d-flex justify-content-between">
                                                            <p className="mb-2">Subtotal</p>
                                                            <p className="mb-2">{sum}</p>
                                                        </div>

                                                        {/* <div className="d-flex justify-content-between">
                                                            <p className="mb-2">Shipping</p>
                                                            <p className="mb-2">$20.00</p>
                                                        </div> */}

                                                        {/* <div className="d-flex justify-content-between mb-4">
                                                            <p className="mb-2">Total(Incl. taxes)</p>
                                                            <p className="mb-2">$4818.00</p>
                                                        </div> */}

                                                        <button type="button" className="btn btn-info btn-block btn-lg">
                                                            <div className="d-flex justify-content-between">
                                                                <span>{sum}</span>
                                                                <Link to={'/payment'}> Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></Link>
                                                            </div>
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}