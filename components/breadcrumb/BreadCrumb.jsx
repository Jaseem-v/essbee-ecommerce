import React from 'react'

const navigationDefault = ["Home", "Cart"]

export default function BreadCrumb({ navigation = navigationDefault, title = "cart" }) {
    return (
        <div className="breadcrumb" >
            <div className="breadcrumb__overlay"></div>
            <div className="container breadcrumb__container">
                <div className="breadcrumb__heading">
                    <h1 className="breadcrumb__title">
                        {title}
                    </h1>
                    <h4 className="breadcrumb__navigator">

                        {navigation.map((el, i) => {
                            if (i < (navigation.length - 1)) {
                                return <>  <a href="index.html">{el} </a>
                                    <i className="fa fa-chevron-right"></i>
                                </>
                            } else {
                                return (el)
                            }
                        })

                        }
                    </h4>
                </div>
            </div>

        </div>

    )
}
