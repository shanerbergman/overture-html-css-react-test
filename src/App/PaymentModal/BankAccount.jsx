import React from "react";

const BankAccount = ({ bankData, setBankData }) => {
  const onChangeName = (e) => {
    setBankData({
      ...bankData,
      nameOnAccount: e.target.value,
    });
  };

  return (
    <div className="payment-modal__inputs payment-modal__inputs--bank-account">
      <div className="payment-modal__inputs__input--full-width">
        <label htmlFor="nameOnAccount">Name on Account</label>
        <input
          type="text"
          name="cardholderName"
          className="name"
          onChange={onChangeName}
          value={bankData.nameOnAccount}
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
        <label htmlFor="accountNumberConfirm">Confirm Account Number</label>
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
  );
};

export default BankAccount;
