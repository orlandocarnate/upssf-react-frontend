import React from "react";
import { Container } from "react-bootstrap";

function Donate() {
  return (
    <Container className="my-5 text-center">
      <h1>Make a donation today!</h1>

      <p>
        All proceeds go towards improving the lives of disadvantaged young
        individuals by providing educational assistance such as scholarships,
        tuition assistance, and stipends for qualified students
      </p>

      <p>
        You can now donate online to our PayPal account. By clicking on the
        Donate button below you will be redirected to our PayPal page.
      </p>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="3SQ8LNMPZJBK4" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
      <p></p>
      <p>Thank you for your donation!</p>
    </Container>
  );
}

export default Donate;
