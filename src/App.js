import "./App.css";
import { useState } from "react";

function App() {
  function reload() {
    const number = document.querySelector("#card-number").value
    if(number.match(/^(?:3[47][0-9]{13})$/)) {
      alert("Payment Successful!")
    }
    if(number.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
      alert("Payment Successful!")
    }
    if(number.match(/^(?:5[1-5][0-9]{14})$/)) {
      alert("Payment Successful!")
    }
    if(number.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/)) {
      alert("Payment Successful!")
    }
    if(number.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/)) {
      alert("Payment Successful!")
    }
    if(number.match(/^(?:(?:2131|1800|35\d{3})\d{11})$/)) {
      alert("Payment Successful!")
    } else {
      alert("Сard does not exist")
    }
  }





  return (
    <>
      <div className="container">
        <div id="form-container">
          <div id="card-front">
            <div id="shadow"></div>
            <div id="image-container">
              <span id="amount">
                paying: <strong>$99</strong>
              </span>
              <span id="card-image"></span>
            </div>

            <label for="card-number">Card Number</label>
            <br />
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9101 1112"
              length="16"
              maxLength="16"
            ></input>
            <div id="cardholder-container">
              <label for="card-holder">Card Holder</label>
              <br />
              <input type="text" id="card-holder" placeholder="e.g. John Doe" />
            </div>
            <div id="exp-container">
              <label for="card-exp">Expiration</label>
              <br />
              <input
                id="card-month"
                type="text"
                placeholder="MM"
                maxLength="2"
              ></input>
              <input
                id="card-year"
                type="text"
                placeholder="YY"
                maxLength="2"
              ></input>
            </div>
            <div className="container_back"></div>
            <div id="cvc-container">
              <label for="card-cvc"> CVC/CVV</label>
              <br />
              <input
                id="card-cvc"
                placeholder="XXX-X"
                type="text"
                maxLength="4"
              ></input>
              <p>Last 3 or 4 digits</p>
            </div>

            <div id="card-back">
              <div id="card-stripe"></div>
            </div>
            <button
              type="button"
              id="card-btn"
              onClick={reload}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
