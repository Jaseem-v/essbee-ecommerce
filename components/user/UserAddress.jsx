import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";

export default function UserAddress() {
    const [isEditAddress, setIsEditAddress] = useState(false)

    return (
        <div className="my-account__address-container">

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
             Edit Address
                </a>
            }
        </div>
    )
}
