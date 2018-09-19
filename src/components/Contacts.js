import React from "react";
import "./contacts.scss";

const Contacts = props => {
  return (
    <section className="contacts">
      <h3 className="contacts__title">CONTACT US</h3>
      <p className="contacts__text">
        Leave us your data and we will contact you soon
      </p>
      <form className="contacts__form" action="#">
        <input
          type="email"
          name="email"
          required
          className="contacts__input"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="phone"
          required
          className="contacts__input"
          placeholder="Phone"
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Content"
        />
        <button type="submit" className="contacts__submit">
          SEND
        </button>
      </form>
      <p className="contacts__direct">...or contact us directly</p>
      <div className="contacts__people">
        <div className="contacts__item">
          <img src="#" alt="user-icon" className="contacts__item-icon" />
          <div className="contacts__item-info">
            <h4 className="contacts__item-name">Сhristian Kuhr </h4>
            <p className="contacts__item-position">Sales Director</p>
            <p className="contacts__item-mail">christian.kuhr@bizico.com </p>
            <p className="contacts__item-phone">+48 883 332 342</p>
            <p className="contacts__item-country">Germany</p>
          </div>
        </div>
        <div className="contacts__item">
          <img src="#" alt="user-icon" className="contacts__item-icon" />
          <div className="contacts__item-info">
            <h4 className="contacts__item-name">Heinrich Hess </h4>
            <div className="content__item-details">
              <p className="contacts__item-position">Sales Director</p>
              <p className="contacts__item-mail">christian.kuhr@bizico.com </p>
              <p className="contacts__item-phone">+48 883 332 342</p>
              <p className="contacts__item-country">Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
