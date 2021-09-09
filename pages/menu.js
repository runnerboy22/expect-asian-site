import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { Accordion, Card } from "react-bootstrap";
import {
  appetizer,
  houseSpecials,
  banhmi,
  entree,
  salad,
  dessert,
  kidsMenu,
  sideOrder,
} from "../public/data/foodMenu";
import violetDreams from "../public/images/drinks-violet-dreams.jpg";
import nyWhiskeySour from "../public/images/drinks-ny-whiskey-sour.jpg";
import raspberryLemonDrop from "../public/images/drinks-raspberry-lemon-drop.jpg";
import manhattan from "../public/images/drinks-manhattan.jpg";
import galbi from "../public/images/food-galbi.jpg";
import momo from "../public/images/food-momo.jpg";
import pakora from "../public/images/food-pakora.JPG";
import koreanFriedChicken from "../public/images/food-korean-fried-chicken.jpg";

import {
  specials,
  classics,
  redWine,
  whiteWine,
  sparklingWine,
  draftBeer,
  bottleBeer,
  nonAlcoholicDrinks,
  asianDrinks,
} from "../public/data/drinkMenu";

import styles from "../styles/Menu.module.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      onClick={decoratedOnClick}
      className={
        styles.isCurrentEventKey ? styles.sectionOpened : styles.sectionClosed
      }
    >
      {children}
    </div>
  );
}

function Menu() {
  return (
    <div className={styles.menu}>
      <section style={{ padding: "15px", textAlign: "center" }}>
        The Following menu will be effective Feb 3rd, 2021.
      </section>
      <section className={styles.happyHour}>
        <span>Happy Hour [Tue-Fri 4-6pm] </span>
        <br />
      </section>
      <div className={styles.columnWrapper}>
        <section
          id="drink-menu"
          className={`${styles.Column} ${styles.Drinks}`}
        >
          <h4 className={styles.h4}>
            Drinks{" "}
            <span className={styles.goToFoodMenu}>
              <Link href="/menu#food-menu">
                <a className={styles.a}>Go to food menu</a>
              </Link>
            </span>
          </h4>
          <ul className={styles.drinkPhotos}>
            <li>
              <Image alt="Violet Dreams Cocktail" src={violetDreams} />
            </li>
            <li>
              <Image alt="New Whiskey Sour" src={nyWhiskeySour} />
            </li>
            <li>
              <Image alt="Raspberry Lemon Drop" src={raspberryLemonDrop} />
            </li>
            <li>
              <Image alt="Manhattan" src={manhattan} />
            </li>
          </ul>

          <div className={styles.MenuSection}>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Special Cocktails</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {specials.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Classic Cocktails</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {classics.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Red Wine</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {redWine.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>White Wine</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {whiteWine.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Sparkling Wine</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {sparklingWine.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Sake</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {asianDrinks.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Draft Beer</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {draftBeer.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Bottle/Can Beer</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {bottleBeer.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Non-Alcoholic Drinks</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {nonAlcoholicDrinks.map((data) => {
                        return (
                          <ul>
                            <li>{data.name}</li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </section>
        <section id="food-menu" className={`${styles.Column} ${styles.Food}`}>
          <h4 className={styles.h4}>
            Food{" "}
            <span className={styles.goToDrinkMenu}>
              <Link href="/menu#drink-menu">
                <a className={styles.a}>Go to drink menu</a>
              </Link>
            </span>
          </h4>
          <ul className={styles.foodPhotos}>
            <li>
              <Image alt="Momo - Tibetan Dumpling" src={momo} />
            </li>
            <li>
              <Image alt="Galbi - Korean Short Ribs" src={galbi} />
            </li>
            <li>
              <Image alt="Indian Pakora" src={pakora} />
            </li>
            <li>
              <Image
                alt="Korean Fried Chicken Wings"
                src={koreanFriedChicken}
              />
            </li>
          </ul>
          <div className={styles.MenuSection}>
            <section className={styles.allergyWarning}>
              *If you have any allergy concerns, please notify your server.
            </section>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Small Plates</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {appetizer.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>House Specials</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {houseSpecials.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                              {data.options && (
                                <div className={styles.options}>
                                  UPCHARGE: {data.options}
                                </div>
                              )}
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Banh Mi (Vietnamese Sandwich)</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {banhmi.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Kid's Menu (Ages 12 and under)</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {kidsMenu.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                              {data.options && (
                                <div className={styles.options}>
                                  UPCHARGE: {data.options}
                                </div>
                              )}
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Entree</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {entree.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                              {data.options && (
                                <div className={styles.options}>
                                  UPCHARGE: {data.options}
                                </div>
                              )}
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Salad</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {salad.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Side Order</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {sideOrder.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                              {data.options && (
                                <div className={styles.options}>
                                  UPCHARGE: {data.options}
                                </div>
                              )}
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle className={styles.ch} eventKey="0">
                  <ContextAwareToggle eventKey="0">
                    <h5>Dessert</h5>
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.menuItemDetail}>
                      {dessert.map((data) => {
                        return (
                          <ul>
                            <li>
                              {data.name}{" "}
                              <div className={styles.description}>
                                {data.description}
                              </div>
                            </li>
                            <li>{data.price}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Menu;
