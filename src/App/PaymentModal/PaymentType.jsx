import React from "react";

const PaymentType = (props) => {
  const [errors, setErrors] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("bankAccount");
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
  const submitPaymentForm = (e) => {
    e.preventDefault();

    if (formSubmitting) {
      console.log("form is already being submitted, preventing double submit");
      return;
    }

    let errors = [];
    let $errorFields = [];
    setErrors(errors, $errorFields);

    var authData = { paymentApiKey: "TestPaymentKey" };
    var secureData = {};
    secureData.authData = authData;

    if (errors.length > 0) {
      setErrors(errors, $errorFields);
      setFormSubmitting(false);
      return;
    }

    // Future code will submit the object above
    console.log(
      "This will be submitted:",
      authData,
      cardData,
      bankData,
      secureData
    );

    setShowPaymentModal(false);
    setShowPaymentSuccessModal(true);
    setFormSubmitting(false);
  };

  return (
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
            onChange={handlePaymentMethodChange}
          />{" "}
          <label htmlFor="bankAccount">Bank Account</label>
          <input
            id="creditCard"
            type="radio"
            name="paymentMethod"
            value="creditCard"
            onChange={handlePaymentMethodChange}
          />{" "}
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        {props.children}
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
  );
};

export default PaymentType;
