import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CheckUserExist from "../CheckUserExists/CheckUserExist"
import { Dropdown } from 'react-bootstrap';
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
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary pl-5 pr-5" id="navigationbar"  >
                <div className="d-flex justify-content-between w-100 ">
                    <a className="navbar-brand me-2" href="/">
                        <div className="d-flex">
                            <h3 className="text-primary">H</h3>
                            <h3 className="text-secondary">T</h3>
                            <h3 className="text-success">T</h3>
                            <h3 className="text-warning">T</h3>
                            <h3 className="text-info">V</h3>
                            {/* <h3 className="text-secondary">W</h3> */}
                            <h3 className="text-muted">-</h3>
                            <h3 className="text-danger">S</h3>
                            <h3 className="text-warning">T</h3>
                            {/* <h3 className="text-success">O</h3>
                            <h3 className="text-primary">R</h3>
                            <h3 className="text-secondary">E</h3> */}

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

                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="navbarDropdownMenuAvatar">
                                        <img
                                            src={user.avatar}
                                            className="rounded-circle"
                                            height="25"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#my-profile">My profile</Dropdown.Item>
                                        <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                                        <Dropdown.Item onClick={OnClick}> <Link to={'/login'}>Logout</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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