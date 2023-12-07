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
                                            target="_blank"
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
                                    Products
                                </h6>
                                <p>
                                    <a className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a className="text-reset">React</a>
                                </p>
                                <p>
                                    <a className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a className="text-reset">Laravel</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a className="text-reset">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </>
    )
}