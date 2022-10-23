import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const navigationDefault = ["Home", "Shop", "Shop Register"]
const ShopRegister = () => {
    return (
        <div>
            <BreadCrumb title="Shop Register" navigation={navigationDefault} />
            <section className="login section-padding">
                <div className="card delivery__card">
                    <form>
                        <h2 className="title mb-5">Shop Registeration </h2>
                        {/* <p className="subtitle">already have an account? <a href="login.html"> Login</a></p> */}



                        <div className="email-login">
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <label htmlFor="firstName"> <b>Shop Name*</b></label>
                                    <input type="text" placeholder="Enter Shop Name" name="shopName" required />
                                    <label htmlFor="firstName"> <b>First Name*</b></label>
                                    <input type="text" placeholder="Enter First Name" name="firstName" required />
                                    <label htmlFor="lastName"> <b>Last Name*</b></label>
                                    <input type="text" placeholder="Enter Last Name" name="lastName" required />
                                    <label htmlFor="contactNumber"> <b>Contact Number*</b></label>
                                    <input type="text" placeholder="Enter Contact Number" name="contactNumber" required />
                                    <label htmlFor="email"> <b>Email*</b></label>
                                    <input type="text" placeholder="Enter Email" name="email" required />
                                    <label htmlFor="shop_img"> <b>Upload Image</b></label>
                                    <input type="file" placeholder="Enter Contact Number" name="shop_img" required />
                                    <label htmlFor="upload_logo"> <b>Upload Logo</b></label>
                                    <input type="file" placeholder="Enter Contact Number" name="upload_logo" required />

                                    <label htmlFor="address"> <b>Address</b></label>
                                    <textarea name="address" id="address" cols="30" rows="5"></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Gst"> <b>GST</b></label>
                                    <input type="text" placeholder="Enter GST" name="Gst" required />

                                    <label htmlFor="userName"> <b>User Name</b></label>
                                    <input type="text" placeholder="Enter User Name" name="userName" required />
                                    <label htmlFor="psw"> <b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" required />
                                    <label htmlFor="cpsw"><b>Confirm Password</b></label>
                                    <input type="password" placeholder="Confirm Password" name="cpsw" required />
                                    <label htmlFor="pinCode"> <b>Pin Code</b></label>
                                    <input type="text" placeholder="Enter Pincode" name="pinCode" required />

                                    <button className="btn w-100 mt-3" type="submit">Register</button>

                                </div>
                            </div>


                        </div>
                        {/* <p className="or"><span>or</span></p>

                        <div className="social-login">
                            <button className="google-btn">
                                <img alt="Google"
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                                <p className="btn-text">Sign in with Google</p>
                            </button>

                        </div> */}

                        {/* <a className="forget-pass mt-3" href="#">Forgot password?</a> */}
                    </form>
                </div>
            </section >
        </div>
    );
};

export default ShopRegister;
