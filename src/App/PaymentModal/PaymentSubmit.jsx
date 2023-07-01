import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const PaymentSubmit = ({ errors }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmit = () => {
    console.log("errors", errors);
    setFormSubmitting(true);
  };

  return (
    <>
      <div className="payment-modal__submit-container">
        <button
          onClick={formSubmitting ? null : handleSubmit}
          className="pay-button"
          type="submit"
        >
          {formSubmitting ? (
            <div>
              <FontAwesomeIcon icon={faSpinner} spin={true} />
            </div>
          ) : (
            <div>Pay</div>
          )}
        </button>
      </div>
    </>
  );
};

export default PaymentSubmit;
