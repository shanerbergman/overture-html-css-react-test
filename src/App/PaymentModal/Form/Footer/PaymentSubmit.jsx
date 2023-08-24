import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import LockIcon from "../../../../../img/lock.svg";

const PaymentSubmit = ({ totalDue, paymentMethod, errors, setErrors }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const submitCreditCard = (e) => {
    if (Object.keys(errors.cardData).length) {
      setErrors({
        ...errors,
        showErrors: true,
      });
      e.preventDefault();
    } else {
      setFormSubmitting(true);
    }
  };

  const submitBankAccount = (e) => {
    console.log("ERR", errors);
    if (Object.keys(errors.bankData).length) {
      setErrors({
        ...errors,
        showErrors: true,
      });
      e.preventDefault();
    } else {
      setFormSubmitting(true);
    }
  };

  const handleSubmit = (e) => {
    if (paymentMethod === "creditCard") {
      submitCreditCard(e);
    } else {
      submitBankAccount(e);
    }
  };

  return (
    <>
      <div className="payment-modal__submit-container">
        <button
          style={{
            width: "100%",
            height: "40px",
            border: "none",
            backgroundColor: "#1890ff",
            color: "white",
          }}
          onClick={formSubmitting ? null : handleSubmit}
          type="submit"
        >
          {formSubmitting ? (
            <div>
              <FontAwesomeIcon icon={faSpinner} spin={true} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  marginRight: "5px",
                  height: "18px",
                }}
                src={LockIcon}
                alt="Lock Icon"
              />
              <div>Pay {totalDue}</div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default PaymentSubmit;
