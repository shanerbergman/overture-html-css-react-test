import React, { useEffect } from "react";

const PaymentErrors = ({ cardData, bankData, errors, setErrors }) => {
  console.log("cardData", cardData);
  useEffect(() => {
    // check cardno for errors
    if (cardData.cardno.length === 20) {
      delete errors.cardData.cardno;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.cardno = true;
      setErrors({
        ...errors,
      });
    }
    // check fullName for errors
    if (cardData.fullName.length > 1) {
      delete errors.cardData.fullName;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.fullName = true;
      setErrors({
        ...errors,
      });
    }
    // check expirydt for errors
    if (cardData.expirydt.length > 1) {
      delete errors.cardData.expirydt;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.expirydt = true;
      setErrors({
        ...errors,
      });
    }
    // check cvc for errors
    if (cardData.cvc.length > 1) {
      delete errors.cardData.cvc;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.cvc = true;
      setErrors({
        ...errors,
      });
    }
    // check cvc for errors
    if (cardData.zip.length > 1) {
      delete errors.cardData.zip;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.zip = true;
      setErrors({
        ...errors,
      });
    }

    if (bankData.accountNumber.length > 6) {
      delete errors.bankData.accountNumber;
      setErrors({
        ...errors,
      });
    } else {
      errors.bankData.accountNumber = true;
      setErrors({
        ...errors,
      });
    }
    if (bankData.routingNumber.length > 6) {
      delete errors.bankData.routingNumber;
      setErrors({
        ...errors,
      });
    } else {
      errors.bankData.routingNumber = true;
      setErrors({
        ...errors,
      });
    }
    if (bankData.nameOnAccount.length > 1) {
      delete errors.bankData.nameOnAccount;
      setErrors({
        ...errors,
      });
    } else {
      errors.bankData.nameOnAccount = true;
      setErrors({
        ...errors,
      });
    }

    if (
      bankData.accountType === "checking" ||
      bankData.accountType === "businessChecking" ||
      bankData.accountType === "savings"
    ) {
      delete errors.bankData.accountType;
      setErrors({
        ...errors,
      });
    } else {
      errors.bankData.accountType = true;
      setErrors({
        ...errors,
      });
    }
    if (bankData.accountNumberConfirm === bankData.accountNumber) {
      delete errors.bankData.accountNumberConfirm;
      setErrors({
        ...errors,
      });
    } else {
      errors.bankData.accountNumberConfirm = true;
      setErrors({
        ...errors,
      });
    }
  }, [cardData, bankData]);

  return <div className="payment-error"></div>;
};

export default PaymentErrors;
