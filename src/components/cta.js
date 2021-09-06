import React from "react";
import { Button, Container } from "react-bootstrap";
import { LogoPaypal } from "react-ionicons";
import "./cta.css"

function CallToAction() {
  return (
    <div className="cta" id="donate">
      <Container className="">
        <h1>
          <LogoPaypal
            color={"#ff0000"}
            height="2.4rem"
            width="2.4rem"
            className="pr-3"
          />
          Make a Donation Today!
        </h1>

        <div className="cta-text pt-5">
          <p>
            All proceeds go towards improving the lives of disadvantaged young
            individuals by providing educational assistance such as
            scholarships, tuition assistance, and stipends for qualified
            students
          </p>

          <p>
            You can now donate online to our PayPal account. By clicking on the
            Donate button below you will be redirected to our PayPal page.
          </p>

          <div className="text-center">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="3SQ8LNMPZJBK4"
              />
              <input
                className="paypal-logo"
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                className="paypal-banks"
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <p></p>
          <p>Thank you for your donation!</p>
        </div>
      </Container>
    </div>
  );
}

export default CallToAction;
