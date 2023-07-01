import React from "react";

const PaymentSuccessModal = ({ setShowPaymentSuccessModal }) => {
  return (
    <div
      className={
        "payment-success-modal " // + (showPaymentSuccessModal ? "" : "payment-success-modal--hidden")
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
  );
};

export default PaymentSuccessModal;
