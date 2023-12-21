import { Link } from 'react-router-dom'
export default function Footer() {

    const onchange = async (e) => {
        const value = e.target.value

    }
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <div id="mc_embed_shell">
                                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

                                    <div id="mc_embed_signup">
                                        <form
                                            action="https://gmail.us14.list-manage.com/subscribe/post?u=4c202c2dbaa92859c8ffc8be0&amp;id=b12483e694&amp;f_id=003da4e0f0"
                                            method="post"
                                            id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="validate"
                                           
                                        >
                                            <div id="mc_embed_signup_scroll">
                                                <h2>Subscribe</h2>

                                                <div className="mc-field-group">
                                                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                                    <input
                                                        type="email"
                                                        name="EMAIL"
                                                        className="required email"
                                                        id="mce-EMAIL"
                                                        required=""
                                                        defaultValue=""
                                                        onChange={(e) => onchange(e)}
                                                    />
                                                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                                </div>
                                                <div id="mce-responses" className="clear foot">
                                                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                                                </div>
                                                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                                    <input type="text" name="b_4c202c2dbaa92859c8ffc8be0_b12483e694" tabIndex="-1" value="" onChange={(e) => onchange(e)} />
                                                </div>
                                                <div className="optionalParent">
                                                    <div className="clear foot">
                                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" onChange={(e) => onchange(e)} />

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Programming Languages was used
                                </h6>
                                <p>
                                    <a className="text-reset">React</a>
                                </p>
                                <p>
                                    <a className="text-reset">NodeJS + Mongo</a>
                                </p>
                                <p>
                                    <a className="text-reset">SCSS + CSS</a>
                                </p>
                                <p>
                                    <a className="text-reset">JavaScript</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Development By
                                </h6>
                                <p>
                                    <Link to={'https://github.com/Huy3004'} target='_blank'  className="text-reset">Đặng Đình Huy</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/thag15'} target='_blank'  className="text-reset">Hồ Quốc Thắng</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/truongthinh776'} target='_blank'  className="text-reset">Vương Trường Thịnh</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/HuynhPhuocTri'} target='_blank'  className="text-reset">Huỳnh Phước Trí</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/AndrewZKn'} target='_blank' className="text-reset">Nguyễn Triệu Vỹ</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Vietnam, TP Ho Chi Minh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    trieuvyxka1@gmail.com
                                </p>
                                <p><i className="fas fa-print me-3"></i> 0837441290</p>
                                {/* <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p> */}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="#">HTTTV-TEAM</a>
                </div>
            </footer>
        </>
    )
}