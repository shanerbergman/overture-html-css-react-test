import React, { useState } from "react";

const CreditCard = ({ cardData, setCardData }) => {
  const onChangeName = (e) => {
    setCardData({
      ...cardData,
      fullName: e.target.value,
    });
  };

  const onChangeCard = (e) => {
    const re = /^[0-9\b\ ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        cardno: e.target.value,
      });
    }
  };

  const onChangeExp = (e) => {
    const re = /^[0-9\b\/]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        expirydt: e.target.value,
      });
    }
  };

  const onChangeCVC = (e) => {
    if (e.target.value.length > 3) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        cvc: e.target.value,
      });
    }
  };

  const onChangeZip = (e) => {
    if (e.target.value.length > 5) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        zip: e.target.value,
      });
    }
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" ") : value;
  };

  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  return (
    <div
      id="card-js"
      className="payment-modal__inputs payment-modal__inputs--credit-card"
    >
      <div className="payment-modal__inputs__input payment-modal__inputs__input--full-width">
        <label htmlFor="cardholderName">Cardholder Name</label>
        <input
          type="text"
          name="cardholderName"
          className="name"
          onChange={onChangeName}
          value={cardData.fullName}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--full-width">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          className="cardetails-input"
          data-mask="0000 0000 0000 0000"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={onChangeCard}
          value={cc_format(cardData.cardno)}
        />
      </div>
      <div className="payment-modal__inputs__input">
        <label htmlFor="expiration">Expiration</label>

        <input
          type="text"
          name="expiry-data"
          className="cardetails-input"
          placeholder="MM / YY"
          onChange={onChangeExp}
          value={expriy_format(cardData.expirydt)}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--one-sixth">
        <label htmlFor="cardCode">CVC</label>
        <input
          type="text"
          name="cvc"
          className="form-control"
          placeholder="CVC"
          onChange={onChangeCVC}
          value={cardData.cvc}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--one-third">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipcode"
          className="form-control"
          placeholder=""
          onChange={onChangeZip}
          value={cardData.zip}
        />
      </div>
    </div>
  );
};

export default CreditCard;
