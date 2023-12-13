import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CheckUserExist from "../CheckUserExists/CheckUserExist"
export default function Header() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const Onload = async () => {
            try {

                const navigationbar = document.querySelector('#navigationbar')
                const User = await CheckUserExist(navigationbar)
                await setUser(User)
            }
            catch (err) {
                console.log({ message: err.message })
            }

        }
        Onload()
    }, [])
    // đăng xuất
    const OnClick = () => {
        localStorage.removeItem('UserID')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" id="navigationbar" >
                <div className="container">
                    <a className="navbar-brand me-2" href="/">
                        <div className="d-flex">
                                <h1 className="text-primary">A</h1>
                                <h1 className="text-secondary">N</h1>
                                <h1 className="text-success">D</h1>
                                <h1 className="text-warning">R</h1>
                                <h1 className="text-info">E</h1>
                                <h1 className="text-secondary">W</h1>
                                <h1 className="text-muted">-</h1>
                                <h1 className="text-danger">S</h1>
                                <h1 className="text-warning">T</h1>
                                <h1 className="text-success">O</h1>
                                <h1 className="text-primary">R</h1>
                                <h1 className="text-secondary">E</h1>

                        </div>

                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Introduce</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >About us</a>
                            </li>
                        </ul>
                        {

                            user === undefined ? (

                                <div className="d-flex align-items-center" id="NoneUser">
                                    <Link to={'/login'} className="btn btn-primary me-3">
                                        Login
                                    </Link>
                                    <Link to={'/cart'} className="btn btn-primary me-3">
                                        Cart
                                    </Link>

                                    <button type="button" className="btn btn-primary" onClick={OnClick}>Logout</button>
                                </div>
                            ) : (

                                <div className="d-flex align-items-center" id="NoneUser">
                                    <Link to={'/login'} className="btn btn-primary me-3">
                                        Login é
                                    </Link>
                                    <Link to={'/cart'} className="btn btn-primary me-3">
                                        Cart
                                    </Link>
                                    <button type="button" className="btn btn-primary" onClick={OnClick}>Logout</button>
                                </div>

                            )
                        }





                        {/* <div className="d-flex align-items-center" id="HasUser">
                            <Link to={'/login'} className="btn btn-primary me-3">
                                Login
                            </Link>
                            <Link to={'/cart'} className="btn btn-primary me-3">
                                Cart
                            </Link>

                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}