import React from "react";
import "./advantages.scss";
import Title from "../Title";
import Button from "../Button";
import TopItem from "./TopItem";
import ItemIcon from "./ItemIcon";
import ItemTitle from "./ItemTitle";
import ItemText from "./ItemText";

import "bootstrap/dist/css/bootstrap.min.css";
import { classNameConstructor } from "../../serveces/classNameConstructor";

const Advantages = props => {
  return (
    <section className={props.mainClass}>
      <Title
        className={classNameConstructor(props.mainClass, "title")}
        text="WHY BIZICO?"
      />
      {props.children}
      <div className="advantages__list">
        <div className="row">
          <TopItem position="top">
            <ItemIcon path="#" />
            <ItemTitle>Projekte nach deutschen Standard</ItemTitle>
            <ItemText>
              BIZICO akzeptiert Ihre Vertragsdokumente und
              Geheimhaltungsvereinbarungen (NDA). Sie bekommen immer den
              Sourcecode und das uneingeschränkte geistigem Eigentum (IP).
              Abgerechnet wird in EUR Währung.
            </ItemText>
          </TopItem>
          <TopItem position="top">
            <ItemIcon path="#" />
            <ItemTitle>Keine Vorkasse und Risiken</ItemTitle>
            <ItemText>
              BIZICO arbeitet mit Ihrem freigegebenen Budget und rechnet nach
              Aufwand nachträglich ab. Nur freigegebene Arbeitsstunden und
              akzeptierte Ergebnisse werden abgerechnet.
            </ItemText>
          </TopItem>
        </div>
        <div className="row">
          <TopItem position="bottom">
            <ItemIcon path="#" />
            <ItemTitle>Modernste IT Technologien für Web und Mobile</ItemTitle>
            <ItemText>
              BIZICO arbeitet ausschließlich mit den neuesten
              Programmiersprachen aus den Bereichen Web und Mobile.
            </ItemText>
          </TopItem>
          <TopItem position="bottom">
            <ItemIcon path="#" />
            <ItemTitle>Deutsche Ansprechpartner vor Ort in München</ItemTitle>
            <ItemText>
              BIZICO betreibt ein deutsches Vertriebsbüro in München, dass
              permanent mit 2 deutschen Mitarbeitern (Herr Hess, Herr Kuhr)
              besetzt ist.
            </ItemText>
          </TopItem>
          <TopItem position="bottom">
            <ItemIcon path="#" />
            <ItemTitle>Direkte Kommunikation auf Deutsch</ItemTitle>
            <ItemText>
              Alle Projekte aus Deutschland werden direkt von Igor Lysenke, CEO
              gesteuert. Die Projektkommunikation kann in Deutsch, Englisch,
              oder Russisch erfolgen.
            </ItemText>
          </TopItem>
        </div>
      </div>

      <Button caption="WRITE TO US!" className={classNameConstructor(props.mainClass, "form")} />
    </section>
  );
};

export default Advantages;
