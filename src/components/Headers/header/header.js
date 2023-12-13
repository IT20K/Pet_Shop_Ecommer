import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CheckUserExist from "../CheckUserExists/CheckUserExist"
export default function Header() {
    const [user, setUser] = useState({})
    const [ID, getID] = useState('')
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

        const UserID = localStorage.getItem('UserID')
        const ID = JSON.parse(UserID)
        getID(ID)
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

                                </div>
                            ) : (

                                <div className="d-flex align-items-center" id="NoneUser">
                                    <div class="dropdown">
                                        <a
                                            data-mdb-dropdown-init
                                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                            href="#"
                                            id="navbarDropdownMenuAvatar"
                                            role="button"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                class="rounded-circle"
                                                height="25"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul
                                            class="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar"
                                        >
                                            <li>
                                                <a class="dropdown-item" href="#">My profile</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">Settings</a>
                                            </li>
                                            <li>
                                                <button type="button" className="btn btn-primary" onClick={OnClick}>Logout</button>

                                            </li>
                                        </ul>
                                    </div>
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
            </nav >
        </>
    )
}