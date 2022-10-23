import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-cta pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6 mb-30">
                            <div className="footer__header">
                                <div className="footer__header-content">

                                    <object data="/svg/shipping-fast-solid-svgrepo-com.svg" width="40" height="40"></object>
                                    <div>

                                        <h3 className="footer__header-text">
                                            Free Shipping
                                        </h3>
                                        <p>
                                            From all orders over Rs5,000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 mb-30">
                            <div className="footer__header">
                                <div className="footer__header-content">

                                    <object data="/svg/free-sticker-svgrepo-com.svg" width="40" height="40"></object>
                                    <div>

                                        <h3 className="footer__header-text">
                                            Free Return
                                        </h3>
                                        <p>
                                            Return money within 15 days
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 mb-30">
                            <div className="footer__header">
                                <div className="footer__header-content">

                                    <object data="/svg/secure-payment-svgrepo-com.svg" width="40" height="40"></object>
                                    <div>

                                        <h3 className="footer__header-text">
                                            100% Payment Secured
                                        </h3>
                                        <p>
                                            We ensure secure payment with PEV
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 mb-30">
                            <div className="footer__header">
                                <div className="footer__header-content">

                                    <object data="/svg/secure-folder-password-svgrepo-com.svg" width="40" height="40"></object>
                                    <div>

                                        <h3 className="footer__header-text">
                                            100% Guarantee
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">

                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="/eb_logo.png" className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                {/* <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Customer Service</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Store Pickup</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Terms & condition</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area__content">
                        <div className="text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2018, All Right Reserved <a href="#">Essbee</a></p>
                            </div>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
