import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure to create a CSS file for styles

export const ZMS = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    'https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg',
    'https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg',
    'https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleColorChange = (id) => {
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.backgroundColor = 'forestgreen';
  };

  const handleSubmit = () => {
    alert('Your application has been accepted. We will connect with you soon.');
  };

  return (
    <div id="main">
      <div id="firstdiv">
        <div id="logobutton">
          <div id="logo">
            <img src="https://www.zoomcar.com/images/zms-logo-white.png" alt="" />
          </div>
          <div id="button">
            <button id="firstbutton">Request Demo</button>
          </div>
        </div>
        <div id="content">
          <div id="text1">
            <h1>Inspiring Profitable Mobility Solutions of Tomorrow</h1>
            <p>Suite of Connected Technology Offerings and Connected Mobility Solutions for Businesses Worldwide</p>
          </div>
          <div id="buttongreen">
            <button id="buttgreen">Request Demo</button>
          </div>
        </div>
      </div>
      <div id="green_line"></div>
      <div id="offer">
        <h2><b>Product Offerings</b></h2>
      </div>
      <div id="sec_main">
        <div id="solution">
          <div id="vehicle" onClick={() => handleColorChange('vehicle')}>
            <h3>Connected Vehicle Solutions</h3>
          </div>
          <div id="management" onClick={() => handleColorChange('management')}>
            <h3>Yield Management Services</h3>
          </div>
        </div>
        <div id="sec_div">
          <div id="head">
            <p>All-in-one solution to reduce operating costs over 30% via advanced vehicle monitoring and management systems</p>
          </div>
          <div>
            <img id="slide" src={images[slideIndex]} alt="Slide" />
          </div>
          <div id="feature">
            <h2>FEATURES</h2>
          </div>
          <div id="feature_div">
            {[
              { title: 'Vehicle Tracking & Safety', desc: 'Geo-fencing, Real-time alerts, immobilization to manage 24x7' },
              { title: 'Fuel Management', desc: 'Real-time fuel level monitoring and fuel theft detection mechanisms' },
              { title: 'Driver Score', desc: 'Improved fuel efficiency and cost benefits from better driving behavior' },
              { title: 'Operations Automation', desc: 'Automate routine operational tasks and increase uptime over 25%' },
              { title: 'Vehicle Health Monitoring', desc: 'Real-time Asset health monitoring systems for reduced downtime' },
            ].map((feature, index) => (
              <div key={index} className="text_sec">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
          <div id="third_button">
            <button id="third_green">
              <a href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription02">More Details</a>
            </button>
          </div>
        </div>
      </div>
      <div id="third_div">
        <div id="cont_image">
          <div id="heading">
            <h1><b>Why Partner with Us?</b></h1>
          </div>
        </div>
        <div id="main2">
          {[
            { img: 'https://www.zoomcar.com/images/icons-timer-new.png', title: 'Quick Go-To Market', desc: 'Quick and easy onboarding with a fast turnaround time of one week' },
            { img: 'https://www.zoomcar.com/images/icons-car-new.png', title: 'India’s largest B2C Mobility Platform', desc: 'Fleet management experience of managing 20,000+ assets' },
            { img: 'https://www.zoomcar.com/images/icons-remote-new.png', title: 'Works Across Vehicle Types', desc: 'Works seamlessly across - 2W, 3W, Cars, Trucks & Electric Vehicles alike' },
            { img: 'https://www.zoomcar.com/images/icons-table-new.png', title: 'Advanced Data Science Capabilities', desc: 'Self-learning algorithms powered by AI & ML to predict driver behaviour' },
            { img: 'https://www.zoomcar.com/images/icons-license-new.png', title: 'Commitment to Customer Satisfaction', desc: '24x7 dedicated assistance and support system' },
            { img: 'https://www.zoomcar.com/images/icons-delivery-green-new.png', title: 'Pioneer in Shared Subscription', desc: 'Innovative techniques to enable 2-sided marketplaces for better utilisation & revenue' },
            { img: 'https://www.zoomcar.com/images/icons-setting-green-new.png', title: 'Proven Next Gen Technology', desc: 'Best in class stable and scalable tech solutions' },
            { img: 'https://www.zoomcar.com/images/icons-distance-new.png', title: 'Futuristic Products', desc: 'Always in sync with the evolving business landscape' },
            { img: 'https://www.zoomcar.com/images/icons-office-new.png', title: 'Powering Multiple Sectors', desc: 'Partners range from Government bodies to Global companies across varied geographies' },
          ].map((item, index) => (
            <div key={index} className="class2">
              <img src={item.img} alt="" />
              <p><b>{item.title}</b></p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="road_map">
        <img src="https://www.zoomcar.com/assets/component-images/dashboard@2x.a2445440373cd84df21b0d887b8d389f.png" alt="" />
      </div>
      <div id="fourth_div">
        <div id="text_cont">
          <div id="head4">
            <h1><b>Proven Track Records</b></h1>
          </div>
          <div id="para">
            <p>Backed by deep learnings and great driving experiences brought to you over 1 billion+ kms spanning over 7 years</p>
          </div>
        </div>
        <div id="box">
          {[
            { img: 'https://www.zoomcar.com/images/icons-fuel-fuel-type.png', text: '30% Fuel Costs Savings' },
            { img: 'https://www.zoomcar.com/images/icons-swap.png', text: '20% Reduction in Fleet Downtime' },
            { img: 'https://www.zoomcar.com/images/icons-car-pick-up.png', text: '50% Less Accidents & Better Safety' },
            { img: 'https://www.zoomcar.com/images/icons-deposit.png', text: '25% Maintenance Cost Reduction' },
            { img: 'https://www.zoomcar.com/images/icons-ruppee.png', text: '15% Revenue Uplift' },
            { img: 'https://www.zoomcar.com/images/icons-arrows-arrow-right-top.png', text: 'Increase in sales funnel conversion and utilisation' },
          ].map((box, index) => (
            <div key={index} className="blackbox">
              <img src={box.img} alt="" />
              <p><b>{box.text}</b></p>
            </div>
          ))}
        </div>
      </div>
      <div id="fifth_div">
        <div id="heading1">
          <h1><b>Connect With Us</b></h1>
        </div>
        <div id="para2">
          <p>Leave details for us to help your business become future ready</p>
        </div>
        <form id="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div className="input1">
            <input className="input1" type="text" placeholder="Name" required />
            <input className="input1" type="text" placeholder="Email" required />
            <input className="input1" type="text" placeholder="Phone" required />
            <textarea className="input1" placeholder="Message" required />
          </div>
          <div>
            <button id="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <footer>
        <div id="footer">© 2023 Zoomcar. All Rights Reserved</div>
      </footer>
    </div>
  );
};

 