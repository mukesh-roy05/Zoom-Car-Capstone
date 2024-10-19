import React from 'react';
import './host.css'; // Import the CSS file

const Host = () => {
    return (
        <div>
            <div id="navbar"></div>
            <div id="container">
                <div id="one">
                    <h1>Go from EMI to #ZMI <br />-Zoomcar month monthly income</h1>
                    <p>Share your car & earn up to 36,000 as #ZMI <br />Earn fixed amount per sharing hour<br /> Guaranteed weekly payment <br />No conditions Apply</p>
                    <button><h4>START EARNING</h4></button>
                </div>
                <div id="two">
                    <video src="https://www.zoomcar.com/zap/subscribe/build/64440836bb2a2ee19961407349dece57.mp4" autoPlay />
                    <img src="https://www.zoomcar.com/zap/subscribe/build/68ac6c1e3a13f1837af0d4cd921c9add.png" alt="Zoomcar" />
                    <video autoPlay loop src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4" />
                    <h1>3 Simple steps Earning WIth your car in 24 hours </h1>
                    <div className="three">
                        <div>
                            <h2>1. Sign up for free!</h2>
                            <p>Become part of the Zoomcar Host program for absolutely free by filling up a short after sign-up. It takes less than 2 mins to fill the form. No hidden charges.</p>
                        </div>
                        <div>
                            <img src="https://www.zoomcar.com/zap/subscribe/build/bb6776beb9b8bacdc711e5a43f401134.svg" alt="Sign up" />
                        </div>
                    </div>
                    <div className="three">
                        <div>
                            <img src="https://www.zoomcar.com/zap/subscribe/build/29d798d8bc5d57bf22445ed3cc67cff1.svg" alt="Car Health Check" />
                        </div>
                        <div>
                            <h2>2. Get Your Car Health Checked!</h2>
                            <p>Once we receive your details, our expert visits your location to assess your vehicle, and install safety devices in it to ensure complete safety of your car. It all happens in 24 hours.</p>
                        </div>
                    </div>
                    <div className="three">
                        <div>
                            <h2>3. Share and Earn</h2>
                            <p>Share your car through the Zoomcar Host app whenever you are not using it. Flexibility in sharing, share as much or as less as you like.</p>
                        </div>
                        <div>
                            <img src="https://www.zoomcar.com/zap/subscribe/build/fc0cb48e9b85b44423a6660ba79ad43e.svg" alt="Share and Earn" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="h">How we protect your Car</h1>
            <div id="secpart">
                <div id="four">
                    <div>
                        <img src="https://www.zoomcar.com/zap/subscribe/build/e2bfa54a9b46567921c3f14e1276c68e.svg" alt="Major Damages & Repair" />
                        <h3>We cover major damages & repair</h3>
                        <p>Zoomcar provides damage cover and repair handling in case of an unlikely incident of a major accident during the sharing period/ when your car is on a booking.</p>
                    </div>
                    <div>
                        <img src="https://www.zoomcar.com/zap/subscribe/build/1f4b5b69d928bbf104735bdea4914f79.svg" alt="Safe Handling" />
                        <h3>Your car stays in safe handling</h3>
                        <p>All our renters are verified individuals with valid Driving licenses, and have excellent driving stats in the past on our platform. We have complete contact and address details of all our renters.</p>
                    </div>
                    <div>
                        <img src="https://www.zoomcar.com/zap/subscribe/build/eb002ff59dd838a60fd664d21539d877.svg" alt="Contactless Sharing" />
                        <h3>Contactless sharing</h3>
                        <p>Our Keyless technology enables contactless pick-up & drop of your car.</p>
                    </div>
                    <div>
                        <img src="https://www.zoomcar.com/zap/subscribe/build/584189ee6116aeef9f0bfad788813be1.svg" alt="Flexibility in Sharing" />
                        <h3>Flexibility in sharing</h3>
                        <p>Share your car whenever you want as per your usage and convenience.</p>
                    </div>
                    <div>
                        <img src="https://www.zoomcar.com/zap/subscribe/build/a0073dafcc39c09bcf084add77f94472.svg" alt="24/7 Customer Support" />
                        <h3>24 * 7 customer support</h3>
                        <p>Call us, chat with us, drop an email to us, we've got your back round the clock!</p>
                    </div>
                </div>
            </div>
            <div id="thirddetail">
                <h1>Growing rapidly</h1>
                <p>Join Host program and be part of the largest tech-enabled car sharing marketplace</p>
            </div>
            <div id="thirdpart">
                <div className="thirddiv">
                    <img src="https://www.zoomcar.com/zap/subscribe/build/e3a6d127cac35a3a7a139256bb3761eb.png" alt="Satisfied hosts" />
                    <h1>5000+</h1>
                    <p>Satisfied hosts</p>
                </div>
                <div className="thirddiv">
                    <img src="https://www.zoomcar.com/zap/subscribe/build/4a5f55fc81b9a6df6a460a025fdfa509.png" alt="Bookings served" />
                    <h1>5lac+</h1>
                    <p>Bookings served</p>
                </div>
                <div className="thirddiv">
                    <img src="https://www.zoomcar.com/zap/subscribe/build/36da13bf403485c4efacd507efd93735.png" alt="Kms run" />
                    <h1>32cr+</h1>
                    <p>Kms run</p>
                </div>
                <div className="thirddiv">
                    <img src="https://www.zoomcar.com/zap/subscribe/build/c0db9479a08980b830b63433f60d336c.png" alt="Earned by hosts" />
                    <h1>rs120cr+</h1>
                    <p>Earned by hosts</p>
                </div>
            </div>
            <div className="cal">
                <h1>Share Your</h1>
                <h1 className="gre">Xuv 500</h1>
            </div>
            <div className="cal">
                <h1>And earn up to </h1>
                <h1 className="gre">rs 36,000</h1>
                <h1> per month</h1>
            </div>
            <div id="lastpart">
                <h3>Earn fixed amount per sharing hour</h3>
                <button>Calculate Earning</button>
                <a href="#!">How do we estimate your earning</a>
                <img src="https://www.zoomcar.com/zap/subscribe/build/42d8d18a6ff5e453d77c7d1e2c871776.jpeg" alt="Earning Estimate" />
                <div>
                    <h5>Users love Zoomcar Host program. Our app has 4.5+ rating on play store!</h5>
                </div>
                <video autoPlay loop src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4" />
                <div id="fifth">
                    <h1>Still Have Questions?</h1>
                    <div className="line">
                        <p>Do I need to meet renters of my cars?</p>
                        <p>How will I get paid?</p>
                        <p>What happens if my car gets challans or traffic fines while my car is being shared?</p>
                        <p>How much will I earn?</p>
                        <p>How is the price of my car decided?</p>
                        <p>Why are safety devices installed?</p>
                    </div>
                </div>
                <div id="six">
                    <h1>Still confused?</h1>
                    <div>
                        <div>
                            <h5>We are here to help</h5>
                            <p>Visit detailed FAQs section or contact us for more details</p>
                        </div>
                        <div className="subsix">
                            <h4>FAQs</h4>
                            <h4>CONTACT US</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="foot">
                <img src="https://www.zoomcar.com/zap/subscribe/build/5335b9a2cd132fc5c25ea3fec1177b02.svg" alt="Zoomcar Logo" />
            </div>
        </div>
    );
};

export default Host;
