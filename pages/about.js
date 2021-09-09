import "../styles/about.module.css";

import downtownPhoto from "../public/images/downtown-sample-photo.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCocktail } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about">
      <img src={downtownPhoto} />
      <section className="aboutContentWrapper">
        <div className="aboutText">
          <p>
            ExpectAsian brings an exciting addition to the culinary diversity of
            Downtown Walnut Creek
          </p>
          <p>
            Specializing in small plate asian food, cocktails, local wine, draft
            beer and house special meals such as handmade Tibetan dumplings
            (commonly known as Momos in Tibet), we offer the best of Asian
            fusion food and divine alcoholic drinks in an eclectic ambience to
            bring the "special" to your dining experience.
          </p>
          <p>
            ExpectAsian is a venture started by two Tibetan friends with years
            of experience in Food & Beverage industry.
          </p>
        </div>
        <div className="sideBar">
          {/* <FontAwesomeIcon icon={faCocktail} /> */}
        </div>
      </section>
    </div>
  );
}
