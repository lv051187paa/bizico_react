import React from "react";
import "./offer.scss";

import Button from "./Button";

import { classNameConstructor } from "../serveces/classNameConstructor";

const Offer = props => {
  return (
    <header className={props.mainClass}>
      <img className="offer__logo" src="/img/logo_copy.svg" alt="" />
      <h1 className="offer__title">
        Outsourcing von Softwareentwicklung mit Sicherheit und Verstand
      </h1>
      <p className="offer__text">
        BIZICO ist der idealer Partner, wenn Sie vertrauensvoll, sicher, schnell
        und kostengünstig Ihre Softwareentwicklungen auslagern möchten.
      </p>
      <Button
        caption="WRITE TO US!"
        className={classNameConstructor(props.mainClass, "form")}
      />
      <p className="offer__tel">
        <span>OR CALL US</span>
        <span>+48 883 332 342</span>
      </p>
      <div className="offer__goto">
        <i className="far fa-arrow-alt-circle-down" />
      </div>
    </header>
  );
};

export default Offer;
