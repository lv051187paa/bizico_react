import React from "react";
import "./clients.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Clients = props => {
  return (
    <section className="clients">
      <h3 className="clients__title">SOME OF OUR CLIENTS</h3>
      <div className="row clients__list">
        <div className="clients__item col-lg-6">
          <img src="#" className="clients__item-logo" alt="logo" />
          <p className="clients__item-text">
            We have created an app that has increased the trust of the regular
            customers and has attracted the new clients. <br /> <br />
            As a result more than 10k downloads have been received and a useful
            application for the customers. A convenient pay for goods and
            services have been realized in the app. The add-on features include
            code-scanning, balance and order history review. An ability to find
            the nearest gas station is especially popular and helps the clients
            to find their favorite petrol station network.
          </p>
        </div>
        <div className="clients__item col-lg-6">
          <img src="#" className="clients__item-logo" alt="logo" />
          <p className="clients__item-text">
            The platform now allows teachers, students, and parents more
            in-depth engagement in the educational process. <br /> <br />
            Operating out of a central offshore location, Bizico’s robust,
            experienced team remained communicative, organized, and transparent
            with good work ethic and efficient project management.
          </p>
        </div>
        <div className="clients__item col-lg-6">
          <img src="#" className="clients__item-logo" alt="logo" />
          <p className="clients__item-text">
            We have implemented an app that motivates people to repeat their
            purchases in the restaurant network. <br />
            <br />
            Implemented code scanner from the gadget and the ability to pay from
            the app makes the process of calculation easier. <br />
            <br /> The functionality of the app allows you to follow the
            balance. <br /> <br />A geolocation system as well as the
            promotional offers system were also introduced.
          </p>
        </div>
        <div className="clients__item col-lg-6">
          <img src="#" className="clients__item-logo" alt="logo" />
          <p className="clients__item-text">
            Bizico helped to shoulder an overwhelming development load and
            continues to be a valuable partner. <br /> <br />
            They’re attentive to changing personnel requirements and effectively
            use project management tools to provide transparency and updates.
            They’re strong first impression set a positive tone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
