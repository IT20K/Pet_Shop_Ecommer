import { Link } from 'react-router-dom'
import AxiosLogin from './Check/AxiosLogin'
import { Toaster } from "react-hot-toast";

export default function FormLogin() {


    const onSubmit = (e) => {
        const FormLogin = document.querySelector('#FormLogin')
        e.preventDefault()
        AxiosLogin(FormLogin)
    }
    return (
        <div className='p-5 m-5'>
            <Toaster position="top-right" reverseOrder={false}></Toaster>

            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to={'/login'} role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to={'/register'} role="tab"
                        aria-controls="pills-register" aria-selected="false">Register</Link>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form id='FormLogin' action='/' method='post' onSubmit={onSubmit}>
                        <div className="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>

                        <div className="form-outline mb-4">
                            <input type="email" id="LoginEmail" className="form-control" />
                            <label className="form-label" htmlFor="LoginEmail">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="LoginPassword" className="form-control" />
                            <label className="form-label" htmlFor="LoginPassword">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}