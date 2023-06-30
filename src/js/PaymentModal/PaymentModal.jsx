import React from "react";

const PaymentModal = () => {
  console.log("PAYMENT MODAL");

  return (
    <>
      <div
        className={
          "payment-modal " + (formSubmitting ? "payment-modal--submitting" : "")
        }
        onClick={(e) => setShowPaymentModal(false)}
      >
        <div
          className="payment-modal__container center-block"
          onClick={(e) => e.stopPropagation()}
        >
          <form
            id="paymentForm"
            method="post"
            action="/"
            onSubmit={submitPaymentForm}
          >
            <div className="payment-modal__form">
              <div className="payment-modal__payment-method">
                <input
                  id="bankAccount"
                  type="radio"
                  name="paymentMethod"
                  defaultChecked="checked"
                  value="bankAccount"
                />{" "}
                <label htmlFor="bankAccount">Bank Account</label>
                <input
                  id="creditCard"
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                />{" "}
                <label htmlFor="creditCard">Credit Card</label>
              </div>
              <div className="payment-modal__inputs payment-modal__inputs--bank-account">
                <div className="payment-modal__inputs__input--full-width">
                  <label htmlFor="nameOnAccount">Name on Account</label>
                  <input
                    type="text"
                    name="nameOnAccount"
                    autoComplete="cc-name"
                  />
                </div>
                <div className="payment-modal__inputs__input">
                  <label htmlFor="accountType">Account Type</label>
                  <select name="accountType">
                    <option value=""></option>
                    <option value="checking">Checking</option>
                    <option value="businessChecking">Business Checking</option>
                    <option value="savings">Savings</option>
                  </select>
                </div>
                <div className="payment-modal__inputs__input">
                  <label htmlFor="routingNumber">Routing Number</label>
                  <input
                    type="text"
                    name="routingNumber"
                    id="routingNumber"
                    inputMode="numeric"
                    maxLength="9"
                  />
                </div>
                <div className="payment-modal__inputs__input">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    id="accountNumber"
                    inputMode="numeric"
                    maxLength="17"
                  />
                </div>
                <div className="payment-modal__inputs__input">
                  <label htmlFor="accountNumberConfirm">
                    Confirm Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumberConfirm"
                    id="accountNumberConfirm"
                    inputMode="numeric"
                    maxLength="17"
                  />{" "}
                  <br />
                  <br />
                </div>
              </div>
              <div
                id="card-js"
                className="payment-modal__inputs payment-modal__inputs--credit-card"
                style={{ display: "none" }}
              >
                <div className="payment-modal__inputs__input payment-modal__inputs__input--full-width">
                  <label htmlFor="cardholderName">Cardholder Name</label>
                  <input type="text" name="cardholderName" className="name" />
                </div>
                <div className="payment-modal__inputs__input payment-modal__inputs__input--full-width">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="card-number"
                    name="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    inputMode="numeric"
                    autoComplete="cc-number"
                  />
                </div>
                <div className="payment-modal__inputs__input">
                  <label htmlFor="expiration">Expiration</label>
                  <input
                    type="text"
                    name="expMonth"
                    className="expiry-month"
                    inputMode="numeric"
                    autoComplete="cc-exp-month"
                  />
                  <input
                    type="text"
                    name="expYear"
                    className="expiry-year"
                    inputMode="numeric"
                    autoComplete="cc-exp-year"
                  />
                </div>
                <div className="payment-modal__inputs__input payment-modal__inputs__input--one-sixth">
                  <label htmlFor="cardCode">CVC</label>
                  <input
                    type="text"
                    name="cardCode"
                    className="cvc"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                  />
                </div>
                <div className="payment-modal__inputs__input payment-modal__inputs__input--one-third">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    inputMode="numeric"
                    maxLength="20"
                  />
                </div>
              </div>
              <div className="payment-error"></div>
              <div className="payment-modal__submit-container">
                <button
                  className="pay-button"
                  type="submit"
                  disabled={formSubmitting}
                >
                  Pay
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          "payment-success-modal " +
          (showPaymentSuccessModal ? "" : "payment-success-modal--hidden")
        }
        onClick={(e) => setShowPaymentSuccessModal(false)}
      >
        <div
          className="payment-success-modal__container"
          style={{ textAlign: "center" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Payment Received</h2>
          <div>
            Your payment has been received, and you will be emailed a
            confirmation.
          </div>
          <button
            className="payment-success-modal__container__button button"
            style={{ margin: "1em auto" }}
            onClick={(e) => setShowPaymentSuccessModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
