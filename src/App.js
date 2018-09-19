import React, { Component } from 'react';
import Offer from './components/Offer';
import Advantages from './components/advantages/Advantages';
import Clients from './components/Clients';
import Contacts from './components/Contacts';
import Credits from './components/Credits';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Offer mainClass="offer"/>
        <Advantages mainClass="advantages">
          <p className="advantages__text">
          BIZICO ist aus Chernivtsi, Ukraine mit einem Team von 40 Mitarbeitern
          bietet Kunden und Partnern aus Deutschland die Beschleunigung der
          eigenen Softwareentwicklung, Erweiterung der Entwicklungskapazitäten für
          kurz- oder langfristige Projekte und die nachhaltige Reduzierung der
          Projektkosten mit hoher Qualität.
          <br />
          <br />
          Unsere Kunden sind Unternehmen jeglicher Größe und Reife aus
          verschiedenen Industrien, die bereits wissen, welche Anforderungen
          vorliegen und mit welchen innovativen Web- und mobilen Technologien sie
          Ihre Projekte umsetzen möchten.
        </p>
        </Advantages>
        <Clients />
        <Contacts />
        <Credits />
      </div>
    );
  }
}

export default App;
