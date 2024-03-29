import React, { useState, useEffect } from 'react'
import AxiosCart from './AxiosCart/AxiosCart'
import DeleteAxios from './Delete/DeleteAxios'
import AxiosIDCart from './AxiosIDCart/AxiosIDCart'
import AxiosOnDeleteAll from './AxiosOnDeleteAll/AxiosOnDeleteAll'
import AxiosUpdateQuantity from './AxiosUpdateQuantity/AxiosUpdateQuantity'
import { Link } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import CreateInvoices from './CreateInvoices/CreateInvoices'
export default function Cart() {

    // cart sản phẩm
    const [carts, setCart] = useState([])
    // cart id của cart
    const [cartID, setCartID] = useState([])
    // tổng thành tiền
    const [sum, setSum] = useState(0)
    // xử lý số lượng 
    const [_quantity, setQuantity] = useState('');
    // xử lst thang toán
    const [_isPaid, _setIsPaid] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const cart = await AxiosCart();
                setCart(cart);
                const cartID = await AxiosIDCart();
                setCartID(cartID);

                let Total = 0;

                carts.forEach((cart, index) => {
                    const cartSum = cartID[index]?.quantity * cartID[index]?.price;
                    Total += cartSum;
                });
                setSum(Total);
            }
            catch (err) {
                console.log({ message: err.message })
            }
        };

        fetchData();

    }, [carts, cartID]);

    // xoá hết từ cart của users đến carts
    const OnDeleteAll = async () => {
        try {
            await AxiosOnDeleteAll()
        }
        catch (err) {
            console.log({ message: err.message })
        }
    }
    // thay đổi số lượng
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    // tăng số lượng 
    const Increase = async (e) => {
        try {
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
        catch (err) {
            console.log({ message: err.message })
        }
    }
    // giảm số lượng
    const Decrease = async (e) => {
        try {
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
        catch (err) {
            console.log({ message: err.message })
        }
    }
    const CreateOrder = async (data, actions) => {
        try {
            const Total = document.getElementById('Total')
            const totalvalue = await Total.textContent
            CreateInvoices(totalvalue)
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: totalvalue.toString(),
                        }
                    },
                ],
            });
        } catch (err) {
            console.log("An error occurred during order creation:", err);
        }
    };
    // thanh toán thành công
    const onApprove = (data, actions) => {
        try {
            return actions.order.capture().then(function (details) {
                console.log("Payment successful. Transaction ID: " + details.id);
            });
        }
        catch (err) {
            console.log({ message: err.message })
        }
    };
    // huỷ payment
    const onCancel = (data) => {
        console.log("Payment cancelled.");
    };
    
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
                                                                            src={`http://localhost:3002/${cart.ImageDisplay}`}
                                                                            className="img-fluid rounded-3" alt="Shopping item" />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <h5>{cart.productname}</h5>
                                                                        <p className="small mb-0"> MÀU LÔNG</p>
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
                                                                        <input type='text' value={cartID[index]?.quantity || 1} name='quantity'  className='inputValue'
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
                                                                <form action='/' method='post' onSubmit={(e) => {
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
                                            <div className="card bg-secondary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://ik.imagekit.io/4chk4f1pbm/%E1%BA%A3nh%20file%20petshop/aa_nbWLjp_ZB?updatedAt=1704242664334"
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
                                                        {/* <div className="d-flex justify-content-between">
                                                            <p className="mb-2">Shipping</p>
                                                            <p className="mb-2">$20.00</p>
                                                        </div> */}

                                                        {/* <div className="d-flex justify-content-between mb-4">
                                                            <p className="mb-2">Total(Incl. taxes)</p>
                                                            <p className="mb-2">$4818.00</p>
                                                        </div> */}

                                                        {/* <button type="button" className="btn btn-info btn-block btn-lg">
                                                            <div className="d-flex justify-content-between">
                                                                <span>{sum}</span>
                                                                <Link to={'/payment'}> Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></Link>
                                                            </div>
                                                        </button> */}
                                                        <div className="d-flex justify-content-between">
                                                            <p className="mb-2">Subtotal</p>
                                                            <p className="mb-2" id='Total'>{sum}</p>
                                                        </div>


                                                        <div className='row  mt-2'>
                                                            <div className='w-100 d-flex justify-content-center algin-content-center'>
                                                                <PayPalScriptProvider options={{ "client-id": "AY94rKESY3SLKA_aQjLxufEfI47FhGqFrjig4dXWTzNZgLQSRSN-xWCEaUA9scm4nJZ_62FPRNWgIZI-" }}>
                                                                    <div>
                                                                        {_isPaid ? (
                                                                            <p>Thanh toán thành công!</p>
                                                                        ) : (
                                                                            <PayPalButtons
                                                                                id="buttonpayment"

                                                                                createOrder={(data, actions) => CreateOrder(data, actions, sum)}
                                                                                onApprove={onApprove}
                                                                                onCancel={onCancel} />
                                                                        )}
                                                                    </div>
                                                                </PayPalScriptProvider>
                                                            </div>
                                                        </div>
                                                        {/* <div id='paypal'></div> */}
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