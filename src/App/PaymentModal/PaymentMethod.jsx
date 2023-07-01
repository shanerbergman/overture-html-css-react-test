import React from "react";

const PaymentMethod = ({ setPaymentMethod }) => {
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

  return (
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
  );
};

export default PaymentMethod;
