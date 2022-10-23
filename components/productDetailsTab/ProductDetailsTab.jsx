import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function ProductDetailsTab() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (

        <div className="ProductDetailsTab">
            <Box sx={{ bgcolor: 'background.paper' }}>
                {/* <AppBar position="static"> */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    className="ProductDetailsTab__tabs"
                >
                    <Tab label="Description" {...a11yProps(0)} className="ProductDetailsTab__tabs-single" />
                    <Tab label="Features" {...a11yProps(1)} className="ProductDetailsTab__tabs-single" />
                    <Tab label="Reviews" {...a11yProps(2)} className="ProductDetailsTab__tabs-single" />
                    <Tab label="FAQ" {...a11yProps(3)} className="ProductDetailsTab__tabs-single" />
                </Tabs>

                <TabPanel value={value} index={0} className="ProductDetailsTab__tabs-pane">

                    <Image layout='responsive' width="100" height="40" src="/product-1.png" />
                    <Image layout='responsive' width="100" height="40" src="/product-2.png" />

                    <p className="paragraph mt-5">
                        When you get Apple iPhone 12 online, you get an awesome companion. It features Hexa-Core A14 Bionic chip processor with Next-generation Neural Engine, so you can play hi-end games or run heavy files and carry out tasks without worrying about the performance.

                        The upgraded CPU ensures a seamless response time, allowing you to multitask, play games or run any heavy task without worrying about the operation speed. It comes with splash-resistant design. It comes with 5G (sub-6 GHz) support. With 4GB RAM you can install multiple applications and run them all together without disturbing the speed of the phone. Buy the Apple iPhone 12 which flaunts an amazing display, brilliant camera and powerful processor.

                        It flaunts a brilliant combination of 12 MP Ultra wide and 12 MP wide cameras. It takes awesome shots. It offers with Portrait mode with advanced bokeh and Depth Control, Portrait Lighting with six effects (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono), Night mode (Ultra Wide, Wide), etc. Also offers with HDR video recording with Dolby Vision up to 30 fps.

                        The 12 MP front camera offers more natural and personalized options, delivering the stunning selfies. Selfies have never been so clear, or so stunning before. It also offers with Portrait mode with advanced bokeh and Depth Control, Night mode, Time-lapse video with stabilisation, etc.

                        Use Apple iPhone 12 which has a storage of 128GB that let you store files in ease. This smartphone runs on iOS 14 operating system. It is equipped with Face ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor. Comes with Siri support as well.

                        The smartphone features a striking screen which gives you a 15.49 cm all-screen OLED Display. This Super Retina XDR display offers awesome clarity. Now you can see and do more of what you love, without interruption.

                        The resolution is of 2532 x 1170 pixels at 460 ppi. Comes with fingerprint-resistant oleophobic coating. Rated IP68 (maximum depth of 600 cm up to 30 minutes) under IEC standard 60529. Available in awesome colours, it flaunts a stylish design which is easy to hold and is crafted for perfect grip. Its 2775 mAh Lithium ion battery is perfect for continuous working as long as you don’t give up, because it certainly won’t.

                        It supports MagSafe wireless charging up to 15 Watts, Qi wireless charging up to 7.5 Watts, charging via USB to computer system or power adapter. Fast-charge capable: up to 50 percent charge in 30 minutes with 20 Watt adapter or higher. Has Ceramic Shield front, Glass back and aluminium design.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={1} className="ProductDetailsTab__tabs-pane">
                    {/* <ul className="product-page__product-features">
                        <li>128 GB ROM</li>
                        <li> 15.49 cm (6.1 inch) Super Retina XDR Display</li>
                        <li> 12MP + 12MP | 12MP Front Camera</li>
                        <li> A14 Bionic Chip with Next Generation Neural Engine Processor</li>
                        <li> Ceramic Shield</li>
                        <li> IP68 Water Resistance</li>
                        <li> All Screen OLED Display</li>
                        <li> 1 YEAR BRAND WARRANTY</li>
                    </ul> */}

                    <table className="specification">
                        <tr>
                            <td className="specification__head">
                                Brand
                            </td>
                            <td className="specification__description">
                                Apple
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Item Height
                            </td>
                            <td className="specification__description">
                                18 Millimeters
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Item Width
                            </td>
                            <td className="specification__description">
                                31.4 Centimeters
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Screen Size
                            </td>
                            <td className="specification__description">
                                13 Inches
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Item Weight
                            </td>
                            <td className="specification__description">
                                1.6 Kg
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Product Dimensions
                            </td>
                            <td className="specification__description">
                                21.9 x 31.4 x 1.8 cm
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Item model number
                            </td>
                            <td className="specification__description">
                                MF841HN/A
                            </td>
                        </tr>
                        <tr>
                            <td className="specification__head">
                                Processor Brand
                            </td>
                            <td className="specification__description">
                                Intel
                            </td>
                        </tr>
                    </table>

                </TabPanel>
                <TabPanel value={value} index={2} className="ProductDetailsTab__tabs-pane">
                    <div className="review">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="review__heading">
                                    Based on 0 reviews
                                </h2>

                                <div className="review__overall">
                                    <h1 className="review__overall-count">
                                        0.0
                                    </h1>
                                    <h4 className="review__overall-text">
                                        overall
                                    </h4>
                                </div>

                                <Rating starNumber={5} />
                                <Rating starNumber={4} />
                                <Rating starNumber={3} />
                                <Rating starNumber={2} />
                                <Rating starNumber={1} />
                            </div>
                            <div className="col-md-6">
                                <h2 className="revied__heading">
                                    Add a review
                                </h2>

                                <form action="" className='mt-5'>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <h5 className="review__sub-head">
                                                Your Rating
                                            </h5>
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="review__sub-head">
                                                <ul className="d-flex gap-3 align-items-center review__stars">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </ul>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <h5 className="review__sub-head">
                                                Your Review
                                            </h5>
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="review__sub-head">
                                                <textarea name="review" id="reviewMsg" cols="30" rows="10" className="review__input">

                                                </textarea>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row  mt-3">
                                        <div className="col-md-4">
                                            <h5 className="review__sub-head">
                                                Name
                                            </h5>
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="review__sub-head">
                                                <input type="text" placeholder='Enter your Name' className="review__input" />
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <h5 className="review__sub-head">
                                                Email
                                            </h5>
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="review__sub-head">
                                                <input type="email" placeholder='Enter your Email' className="review__input" />
                                            </h5>
                                        </div>
                                    </div>

                                    <button className="btn mt-5">Add Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} className="ProductDetailsTab__tabs-pane">
                    Item Three
                </TabPanel>
                {/* </SwipeableViews> */}
            </Box>
        </div>
    );
}



function Rating({ starNumber }) {
    const fullStar = []
    const emptyStar = []

    for (var i = 0; i < starNumber; i++) {
        fullStar.push(i)
    }
    for (var i = 0; i < (5 - starNumber); i++) {
        emptyStar.push(i)
    }







    return (
        <div>
            <div className="review__rating">
                <ul className="d-flex gap-3 align-items-center review__stars">
                    {
                        fullStar.map((el, i) => <i key={i} className="fa fa-star"></i>)
                    }
                    {
                        emptyStar.map((el, i) => <i key={i} className="fa fa-star-o empty-star"></i>)
                    }

                </ul>

                <div className="review__rating-progress-bar">
                    <span></span>
                </div>

                <h2 className="review__rating-count">
                    0
                </h2>
            </div>
        </div>
    )
}
