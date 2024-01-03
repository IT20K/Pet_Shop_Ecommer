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
                                {/* <div id="mc_embed_shell">
                                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" /> */}

                                {/* <div id="mc_embed_signup">
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
                                                    <div className="response" id="mce-error-response" style={{{{ display: 'none' }}></div>
                                                    <div className="response" id="mce-success-response" style={{{{ display: 'none' }}></div>
                                                </div>
                                                <div aria-hidden="true" style={{{{ position: 'absolute', left: '-5000px' }}>
                                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                {/* <input type="text" name="b_4c202c2dbaa92859c8ffc8be0_b12483e694" tabIndex="-1" value="" onChange={(e) => onchange(e)} />
                                                </div>
                                                <div className="optionalParent">
                                                    <div className="clear foot">
                                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" onChange={(e) => onchange(e)} />

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                <div id="mc_embed_shell">
                                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                                    <div id="mc_embed_signup">
                                        <form
                                            action="https://gmail.us21.list-manage.com/subscribe/post?u=f7e35a50306f46072b96c9d50&amp;id=7a55449cdb&amp;f_id=009defe6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                                            <div id="mc_embed_signup_scroll">
                                                <h2>Subscribe</h2>
                                                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                                                <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">
                                                </span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" /></div>
                                                <div id="mce-responses" class="clear foot">
                                                    <div class="response" id="mce-error-response" style={{display: "none;"}}></div>
                                                    <div class="response" id="mce-success-response" style={{display: "none;"}}></div>
                                                </div>
                                                <div aria-hidden="true" style={{position:" absolute", left: "-5000px;"}}>

                                                    {/* <input type="text" name="b_f7e35a50306f46072b96c9d50_7a55449cdb" tabindex="-1" value="" /> */}
                                                </div>
                                                <div class="optionalParent">
                                                    <div class="clear foot">
                                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                                                        <p style={{margin:" 0px auto;"}}><a href="http://eepurl.com/iFDIVw" title="Mailchimp - email marketing made easy and fun">
                                                            <span style={{diplay: "inline-block", "background-color":" transparent","border-radius": "4px"}}>
                                                            <img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: "220px", height: "40px", display: "flex", padding:" 2px 0px", "justify-content": "center" ,"align-items": "center"}}/>
                                                            </span></a></p>
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
                                    <Link to={'https://github.com/IT20K'} target='_blank' className="text-reset">VAN PHONG</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/LinhThao20'} target='_blank' className="text-reset">LINH THAO</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/qthai0110'} target='_blank' className="text-reset">QUOC THAI</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/HoangDuyK20'} target='_blank' className="text-reset">HOANG DUY</Link>
                                </p>
                                <p>
                                    <Link to={'https://github.com/hohung170502'} target='_blank' className="text-reset">NGOC HUNG</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Vietnam, TP Ho Chi Minh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    2000004457@NTTU.EDU.VN
                                </p>
                                <p><i className="fas fa-print me-3"></i> 0774174728</p>
                                {/* <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p> */}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="#">PETSHOP</a>
                </div>
            </footer>
        </>
    )
}