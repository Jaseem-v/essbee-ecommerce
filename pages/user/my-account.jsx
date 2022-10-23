import Link from "next/link";
// import { LayoutOne } from "../../layouts";
// import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import {
    IoIosList,
    IoIosClipboard,
    IoIosDownload,
    IoIosCash,
    IoIosCreate,
    IoIosPerson,
    IoIosLogOut
} from "react-icons/io";
import {
    CgPassword
} from "react-icons/cg";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import UserAddress from "../../components/user/userAddress";

const MyAccount = () => {

    const [isEdit, setIsEdit] = useState(true)
    return (
        <div className="my-account">

            <div div className="my-account-content space-pt--r100 space-pb--r100" >
                <Container>
                    <Tab.Container defaultActiveKey="dashboard">
                        <Row>
                            <Col lg={3} md={4} className="h-100">
                                <Nav
                                    variant="pills"
                                    className="flex-column my-account-content__navigation space-mb--r60"
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="dashboard">
                                            <IoIosList /> Dashboard
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="orders">
                                            <IoIosClipboard /> Orders
                                        </Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                    <Nav.Link eventKey="download">
                      <IoIosDownload /> Download
                    </Nav.Link>
                  </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="payment">
                                            <IoIosCash /> Payment
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="address">
                                            <IoIosCreate /> Address
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="accountDetails">
                                            <IoIosPerson /> Account Details
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="password">
                                            <CgPassword /> Change Password
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link href="/other/login">
                                            <Nav.Link  >
                                                <IoIosLogOut /> Log Out
                                            </Nav.Link>
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={9} md={8} className="h-100">
                                <Tab.Content>
                                    <Tab.Pane eventKey="dashboard">
                                        <Card className="my-account-content__content">
                                            <Card.Header>
                                                <h3>Dashboard</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="welcome">
                                                    <p>
                                                        Hello, <strong>CR7</strong>
                                                    </p>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="orders">
                                        <Card className="my-account-content__content">
                                            <Card.Header>
                                                <h3>Orders</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="myaccount-table table-responsive text-center">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Order Id</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>July 22, 2022</td>
                                                                <td>#123456</td>
                                                                <td>Rs 3000</td>
                                                                <td>
                                                                    <Link href="/singleproduct/lorem-ipsum-electronics-three">
                                                                        <a className="check-btn sqr-btn ">
                                                                            View
                                                                        </a>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>July 20, 2022</td>
                                                                <td>#123456</td>
                                                                <td>Rs 2000</td>
                                                                <td>
                                                                    <Link href="/singleproduct/lorem-ipsum-electronics-three">
                                                                        <a className="check-btn sqr-btn ">
                                                                            View
                                                                        </a>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>July 10, 2022</td>
                                                                <td>#123456</td>
                                                                <td>Rs 1000</td>
                                                                <td>
                                                                    <Link href="/singleproduct/lorem-ipsum-electronics-three">
                                                                        <a className="check-btn sqr-btn ">
                                                                            View
                                                                        </a>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="payment">
                                        <Card className="my-account-content__content">
                                            <Card.Header>
                                                <h3>Payment Method</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <p className="saved-message">
                                                    You Can&apos;t Saved Your Payment Method yet.
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="address">
                                        <Card className="my-account-content__content">
                                            <Card.Header>
                                                <h3>Billing Address</h3>
                                            </Card.Header>
                                            <Card.Body>

                                                {/* <div className="my-account__address-container">

                                                    {!isEditAddress && <input type="radio" name="home-address" value="home-address" id="" className="my-account__radio-input" />}
                                                    {!isEditAddress ?
                                                        <address>
                                                            <p>
                                                                <strong>Home</strong>
                                                            </p>
                                                            <p>
                                                                street 1, Kalamassery  <br />
                                                                Ernakulam, kerala 673018
                                                            </p>
                                                        </address>

                                                        : <form method="post" name="enq">
                                                            <Row>
                                                                <Col className="form-group" md={12}>
                                                                    <label>
                                                                        New address{" "}
                                                                        <span className="required">*</span>
                                                                    </label>
                                                                    <input value="street 1, Kalamassery
                              Ernakulam, kerala 673018"
                                                                        required
                                                                        className="form-control"
                                                                        name="dname"
                                                                        type="text"
                                                                    />
                                                                </Col>

                                                                <Col md={12}>
                                                                    {
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-fill-out  my-account__btn"
                                                                            name="submit"
                                                                            value="Submit"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setIsEditAddress(!isEditAddress)
                                                                            }}
                                                                        >
                                                                            Save
                                                                        </button>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    }
                                                    {!isEditAddress &&
                                                        <a href="#" className="check-btn sqr-btn my-account__address-edit-btn" onClick={(e) => {
                                                            e.preventDefault();
                                                            setIsEditAddress(!isEditAddress)
                                                        }}>
                                                            <FaRegEdit /> Edit Address
                                                        </a>
                                                    }
                                                </div> */}
                                                <UserAddress />
                                                <UserAddress />


                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="accountDetails">
                                        <Card className="my-account-content__content">
                                            <Card.Header >
                                                <h3>Account Details</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="account-details-form">
                                                    <form method="post" name="enq">
                                                        <Row>
                                                            <Col className="form-group" md={6}>
                                                                <label>
                                                                    First Name <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    required value="cristiano"
                                                                    className="form-control"
                                                                    name="name"
                                                                    type="text"
                                                                    disabled={isEdit}
                                                                />
                                                            </Col>
                                                            <Col className="form-group" md={6}>
                                                                <label>
                                                                    Last Name <span className="required">*</span>
                                                                </label>
                                                                <input value="ronaldo"
                                                                    required
                                                                    className="form-control"
                                                                    name="phone"
                                                                    disabled={isEdit}
                                                                />
                                                            </Col>
                                                            <Col className="form-group" md={12}>
                                                                <label>
                                                                    Display Name{" "}
                                                                    <span className="required">*</span>
                                                                </label>
                                                                <input value="CR7"
                                                                    required
                                                                    className="form-control"
                                                                    name="dname"
                                                                    type="text"
                                                                    disabled={isEdit}
                                                                />
                                                            </Col>
                                                            <Col className="form-group" md={12}>
                                                                <label>
                                                                    Email Address{" "}
                                                                    <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    required value="cr7@gmail.com"
                                                                    className="form-control"
                                                                    name="email"
                                                                    type="email"
                                                                    disabled={isEdit}
                                                                />
                                                            </Col>

                                                            <Col md={12}>

                                                                {isEdit ?
                                                                    <button
                                                                        className="btn btn-fill-out my-account__btn"
                                                                        name="submit"
                                                                        value="Submit"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setIsEdit(!isEdit);
                                                                        }}
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    :
                                                                    <button
                                                                        type="submit"
                                                                        className="btn btn-fill-out my-account__btn"
                                                                        name="submit"
                                                                        value="Submit"
                                                                    >
                                                                        Save
                                                                    </button>
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="password">
                                        <Card className="my-account-content__content">
                                            <Card.Header >
                                                <h3>Change Password </h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="account-details-form">
                                                    <form method="post" name="enq">
                                                        <Row>
                                                            <Col className="form-group" md={12}>
                                                                <label>
                                                                    Current Password{" "}
                                                                    <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    required
                                                                    className="form-control"
                                                                    name="password"
                                                                    type="password"
                                                                />
                                                            </Col>
                                                            <Col className="form-group" md={12}>
                                                                <label>
                                                                    New Password{" "}
                                                                    <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    required
                                                                    className="form-control"
                                                                    name="npassword"
                                                                    type="password"
                                                                />
                                                            </Col>
                                                            <Col className="form-group" md={12}>
                                                                <label>
                                                                    Confirm Password{" "}
                                                                    <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    required
                                                                    className="form-control"
                                                                    name="cpassword"
                                                                    type="password"
                                                                />
                                                            </Col>
                                                            <Col md={12}>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-fill-out my-account__btn"
                                                                    name="submit"
                                                                    value="Submit"
                                                                >
                                                                    Save
                                                                </button>
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div >
        </div>
        // </LayoutOne>
    );
};

export default MyAccount;
