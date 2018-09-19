import React from 'react';
import './offer.scss';

const Offer = props => {
    return(
        <header className="offer">
            <img className="offer__logo" src="/img/logo_copy.svg" alt="" />
            <h1 className="offer__title">
                Outsourcing von Softwareentwicklung mit Sicherheit und Verstand
            </h1>
            <p className="offer__text">
                BIZICO ist der idealer Partner, wenn Sie vertrauensvoll, sicher, schnell und kostengünstig Ihre Softwareentwicklungen auslagern möchten.
            </p>
            <button className="offer__form">
                WRITE TO US!
            </button>
            <p className="offer__tel">
                <span>OR CALL US</span>
                <span>+48 883 332 342</span>
            </p>
            <a href="#" className="offer__goto">
                <i className="far fa-arrow-alt-circle-down"></i>
            </a>
        </header>
    )
}

export default Offer;