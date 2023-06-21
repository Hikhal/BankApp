import React from "react";
export default function Home() {
    // Homepage was looking empty hence the page filled out with ordinary bank info.
  return (
    <div className="homeContainer">
      <h2>Hello Bankers</h2>
      <p>
        We are committed to providing exceptional banking services with a focus
        on security, convenience, and personalized experiences. Explore our
        range of financial products and services designed to meet your unique
        needs.
      </p>
      <div className="featuresSection">
        <div className="feature">
          <h3>Online Banking</h3>
          <p>
            Access your accounts, manage transactions, and perform various
            banking activities conveniently through our secure online banking
            platform.
          </p>
        </div>
        <div className="feature">
          <h3>Mobile Banking</h3>
          <p>
            Take control of your finances on the go with our user-friendly
            mobile banking app. Enjoy seamless access to your accounts from your
            smartphone or tablet.
          </p>
        </div>
        <div className="feature">
          <h3>24/7 Help </h3>
          <p>
            Our dedicated customer support team is available 24/7 to assist you
            with any inquiries, resolve issues, and ensure a smooth banking
            experience for you.
          </p>
        </div>
      </div>
    </div>
  );
}

