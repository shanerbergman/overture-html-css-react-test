import React, { useState, useEffect } from "react";
import PaymentForm from "./PaymentForm";
import PaymentMethod from "./PaymentMethod";
import BankAccount from "./BankAccount";
import CreditCard from "./CreditCard";
import PaymentErrors from "./PaymentErrors";
import PaymentSubmit from "./PaymentSubmit";

const PaymentModal = ({ setShowPaymentModal, setShowPaymentSuccessModal }) => {
  const [paymentMethod, setPaymentMethod] = useState("bankAccount");

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  const [bankData, setBankData] = useState({
    accountNumber: "",
    routingNumber: "",
    nameOnAccount: "",
    accountType: "",
  });

  const [cardData, setCardData] = useState({
    fullName: "",
    cardno: "",
    expirydt: "",
    cvc: "",
    zip: "",
  });

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

    setTimeout(() => {
      setShowPaymentModal(false);
      setShowPaymentSuccessModal(true);
      //setFormSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (paymentMethod === "bankAccount") {
      setBankData({
        ...bankData,
        nameOnAccount: cardData.fullName,
      });
    }
    if (paymentMethod === "creditCard") {
      setCardData({
        ...cardData,
        fullName: bankData.nameOnAccount,
      });
    }
  }, [paymentMethod]);

  return (
    <div
      className={
        "payment-modal " //+ (formSubmitting ? "payment-modal--submitting" : "")
      }
      onClick={(e) => setShowPaymentModal(false)}
    >
      <div
        className="payment-modal__container center-block"
        onClick={(e) => e.stopPropagation()}
      >
        <PaymentForm submitPaymentForm={submitPaymentForm}>
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          {paymentMethod === "bankAccount" && (
            <BankAccount bankData={bankData} setBankData={setBankData} />
          )}
          {paymentMethod === "creditCard" && (
            <CreditCard cardData={cardData} setCardData={setCardData} />
          )}

          <PaymentErrors />
          <PaymentSubmit />
        </PaymentForm>
      </div>
    </div>
  );
};

export default PaymentModal;
