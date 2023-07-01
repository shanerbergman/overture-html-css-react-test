import React, { useState, useEffect } from "react";

const PaymentForm = ({ children, submitPaymentForm }) => {
  //const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);

  // const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);

  return (
    <>
      <form
        id="paymentForm"
        method="post"
        action="/"
        onSubmit={submitPaymentForm}
      >
        <div className="payment-modal__form">{children}</div>
      </form>
    </>
  );
};

export default PaymentForm;

/*
 var cardData = {};
    var bankData = {};
    
    if (paymentMethod == "creditCard") {
      cardData.cardNumber = cardJs.getCardNumber().replace(/[^0-9]/gi, "");
      cardData.month = cardJs.getExpiryMonth().replace(/[^0-9]/gi, "");
      cardData.year = cardJs.getExpiryYear().replace(/[^0-9]/gi, "");
      cardData.cardCode = cardJs.getCvc().replace(/[^0-9]/gi, "");
      cardData.zip = $("[name=zipCode]").val().trim();
      cardData.fullName = cardJs.getName().trim();
      secureData.cardData = cardData;
      if (cardData.month.length == 0 || cardData.year.length == 0) {
        errors.push("Please provide a valid expiration date.");
      }
    } else if (paymentMethod == "bankAccount") {
      let accountNumber = $("[name=accountNumber]").val().trim();
      let accountNumberConfirm = $("[name=accountNumberConfirm]").val().trim();
      if (accountNumber != accountNumberConfirm) {
        errors.push("Account Number and Confirm Account Number do not match.");
      }
      let nameOnAccount = $("[name=nameOnAccount]").val().trim();
      let routingNumber = $("[name=routingNumber]").val().trim();
      let accountType = $("[name=accountType]").val().trim();
      bankData = {
        accountNumber: accountNumber,
        routingNumber: routingNumber,
        nameOnAccount: nameOnAccount,
        accountType: accountType,
      };
      secureData.bankData = bankData;
    }

    */
