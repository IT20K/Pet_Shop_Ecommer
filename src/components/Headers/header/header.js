import { Link } from "react-router-dom"
import CheckUserExist from "../CheckUserExists/CheckUserExist"
export default function Header() {
    const Onload = ()=>{
        const navigationbar = document.querySelector('#navigationbar')
        CheckUserExist(navigationbar)
    }
    // đăng xuất
    const OnClick =()=>{
        localStorage.removeItem('UserID')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" id="navigationbar" onLoad={Onload}>
                <div className="container">
                    <a className="navbar-brand me-2" href="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="16"
                            alt="MDB Logo"
                        />
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

                        <div className="d-flex align-items-center" id="NoneUser">
                            <Link to={'/login'} className="btn btn-primary me-3">
                                Login
                            </Link>
                            <Link to={'/cart'} className="btn btn-primary me-3">
                                Cart
                            </Link>
                            <button type="button"  className="btn btn-primary"onClick={OnClick}>Logout</button>
                        </div>
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