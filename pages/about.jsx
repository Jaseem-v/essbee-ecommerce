import Image from 'next/image'
import React from 'react'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'

const navigationDefault = ["Home", "About"]

export default function about() {
    return (
        <div>
            <BreadCrumb title="About" navigation={navigationDefault} />

            <div className="container">
                <div className="about">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="about__content">
                                <h2 className="about__title">
                                    What we really do?
                                </h2>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <h2 className="about__title mt-5">
                                    History of the Company
                                </h2>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about__content">
                                <h2 className="about__title">
                                    Our Vision
                                </h2>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <h2 className="about__title mt-5">
                                    Cooperate with Us!
                                </h2>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus laudantium labore, sed, possimus ipsa, tenetur vero modi odit fugit ea. Porro quaerat voluptas maxime incidunt at! Voluptatibus, sunt doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about__img">
                                <Image src="/about.jpg" alt="product" layout='responsive' width="100" height="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
