import React, { useState, useEffect } from "react";
import PaymentForm from "./Form/PaymentForm";
import PaymentAmount from "./Form/Header/PaymentAmount";
import PaymentMethod from "./Form/Header/PaymentMethod";
import BankAccount from "./Form/Body/BankAccount";
import CreditCard from "./Form/Body/CreditCard";
import Disclaimer from "./Form/Footer/Disclaimer";
import PaymentErrors from "./Form/Footer/PaymentErrors";
import PaymentSubmit from "./Form/Footer/PaymentSubmit";

const PaymentModal = ({
  totalDue,
  setShowPaymentModal,
  setShowPaymentSuccessModal,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    cardData: {
      fullName: true,
      cardno: true,
      expirydt: true,
      cvc: true,
      zip: true,
    },
  });

  const [bankData, setBankData] = useState({
    accountNumber: "",
    routingNumber: "",
    nameOnAccount: "",
    accountType: "",
    accountNumberConfirm: "",
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

    var authData = { paymentApiKey: "TestPaymentKey" };
    var secureData = {};
    secureData.authData = authData;

    setTimeout(() => {
      setShowPaymentModal(false);
      setShowPaymentSuccessModal(true);
      setFormSubmitting(false);
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
      className={"payment-modal "}
      onClick={(e) => setShowPaymentModal(false)}
    >
      <div
        className="payment-modal__container center-block"
        onClick={(e) => e.stopPropagation()}
      >
        <PaymentForm submitPaymentForm={submitPaymentForm}>
          {/* ---- Header ----- */}
          <PaymentAmount totalDue={totalDue} />
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          {/* ---- Body ----- */}
          <div className="form-body">
            {paymentMethod === "creditCard" && (
              <CreditCard
                cardData={cardData}
                setCardData={setCardData}
                errors={errors}
              />
            )}
            {paymentMethod === "bankAccount" && (
              <BankAccount
                bankData={bankData}
                setBankData={setBankData}
                errors={errors}
              />
            )}
          </div>
          {/* ---- Footer ----- */}
          <Disclaimer totalDue={totalDue} />
          <PaymentErrors
            cardData={cardData}
            errors={errors}
            setErrors={setErrors}
          />
          <PaymentSubmit
            paymentMethod={paymentMethod}
            errors={errors}
            setErrors={setErrors}
            totalDue={totalDue}
          />
        </PaymentForm>
      </div>
    </div>
  );
};

export default PaymentModal;
