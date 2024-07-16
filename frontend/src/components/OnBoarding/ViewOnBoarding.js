import React, { useState, useEffect } from "react";
import { SaveHomeRoute } from "../../utils/HomeRoutes";

export default function ViewOnBoarding({ permissions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLength, setSlidelength] = useState(0);

  useEffect(() => {
    let slides = document.getElementsByClassName("slide");
    setSlidelength(slides.length);
    toggleSlides(0);
  }, []);

  function toggleSlides(v_index) {
    let slides = document.getElementsByClassName("slide");
    slides.forEach((slide, index) => {
      if (index != v_index) {
        slide.style.display = "none";
      } else {
        slide.style.display = "block";
      }
    });
  }

  function createDots(length) {
    let rows = [];
    for (let i = 0; i < length; i++) {
      rows.push(<div key={i} className="paginationDot"></div>);
    }
    return rows;
  }

  function markDots(position) {
    let paginationDots = document.getElementsByClassName("paginationDot");
    paginationDots.forEach((dot, index) => {
      if (position != index) {
        dot.classList.remove("paginationDot--active");
      } else {
        dot.classList.add("paginationDot--active");
      }
    });
  }

  return (
    <div>
      <div className="slides-container">
        {currentIndex > 0 ? (
          <button
            onClick={() => {
              if (currentIndex > 0) {
                let viewIndex = currentIndex - 1;
                toggleSlides(viewIndex);
                markDots(viewIndex);
                setCurrentIndex(viewIndex);
              }
            }}
            className="onboard_btn onboard_btn__absolute onboard_btn__prev onboard_btn--muted"
          >
            Back
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={() => {
            if (currentIndex < slideLength - 1) {
              let viewIndex = currentIndex + 1;
              toggleSlides(viewIndex);
              markDots(viewIndex);
              setCurrentIndex(viewIndex);
            } else {
              window.location.assign("/");
            }
          }}
          className="onboard_btn onboard_btn__absolute onboard_btn__next onboard_btn--highlighted"
        >
          {currentIndex < slideLength - 1 ? "Next" : "Done"}
        </button>
        <section className="slide slide-1">
          <article className="slide__inner slide--left">
            <div className="onboard_container container--slide-1">
              <div className="container__logo">
                <i className="material-icons fas fa-store"></i>
              </div>
              <div className="container__stripe container__stripe--long"></div>
              <div className="container__stripe container__stripe--short"></div>
            </div>
          </article>
          <article className="slide__inner slide--right">
            <h1>Welcome To Biz</h1>
            <p>
              Platform to manage your retailers and market your products. Do it
              all with Netbot App Platform.
            </p>
          </article>
        </section>
        {permissions.can_manage_salesmen ? (
          <section className="slide slide-2">
            <article className="slide__inner slide--left">
              <div className="onboard_card card--profile">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    Kevin Badge
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>413</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>221</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onboard_card card--profile profile--pink">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    Billy Bob
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>13</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>21</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onboard_card card--profile profile--yellow">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    John Mayer
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>13</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>21</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="slide__inner slide--right">
              <h1>Manage Sales People</h1>
              <p>Add your sales team and monitor their sales</p>
              {/* <center>
                <div
                  onClick={() => {
                    SaveHomeRoute("/home/sales");
                    window.open("/");
                  }}
                  className="side_nav_item btn btn-primary text-white"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Sale Person
                </div>
              </center> */}
            </article>
          </section>
        ) : (
          <div />
        )}

        {permissions.can_manage_retailer ? (
          <section className="slide slide-2">
            <article className="slide__inner slide--left">
              <div className="onboard_card card--profile">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    Kevin Badge
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>413</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>221</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onboard_card card--profile profile--pink">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    Billy Bob
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>13</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>21</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onboard_card card--profile profile--yellow">
                <div className="card__logo card--profile__logo">
                  <i className="material-icons fas fa-user-alt"></i>
                </div>
                <div className="card__info card--profile__info">
                  <h5 className="card__info__name card--profile__info__name">
                    Kate Mate
                  </h5>
                  <div className="card__data card--profile__data">
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-copy"></i>
                      <span>13</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <i className="material-icons fas fa-user-alt"></i>
                      <span>21</span>
                    </div>
                    <div className="card__data__stats card--profile__data__stats">
                      <span>Retailers</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="slide__inner slide--right">
              <h1>Recruit Retailers</h1>
              <p>Access your current retailers and add new ones.</p>
              {/* <center>
                <div
                  onClick={() => {
                    SaveHomeRoute("/home/retailers");
                    window.open("/");
                  }}
                  className="side_nav_item btn btn-primary text-white"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Retailers
                </div>
              </center> */}
            </article>
          </section>
        ) : (
          <div />
        )}

        {permissions.can_manage_retailer ? (
          <section className="slide slide-2">
            <article className="slide__inner slide--left">
              <div className="city-wrapper">
                <div className="view_wrapper">
                  <div className="house-wrapper">
                    <div className="house1">
                      <div className="house1-roof"></div>
                      <div className="window-wrap">
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                      </div>
                      <div className="house1-center">
                        <div className="house1-center-roof"></div>
                        <div className="window-wrap">
                          <div className="house1-window window-center"></div>
                          <div className="house1-center-door"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tree-wrapper">
                    <div className="tree">
                      <div className="base"></div>
                    </div>
                  </div>
                  <div className="building-wrapper">
                    <div className="building building1">
                      <div className="window-wrap">
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-door"></div>
                      </div>
                    </div>
                  </div>
                  <div className="building-wrapper">
                    <div className="building building2">
                      <div className="window-wrap">
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-door"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tree-wrapper">
                    <div className="tree">
                      <div className="base"></div>
                    </div>
                  </div>
                  <div className="tree-wrapper">
                    <div className="tree">
                      <div className="base"></div>
                    </div>
                  </div>
                  <div className="house-wrapper">
                    <div className="house2">
                      <div className="house2-main">
                        <div className="house2-main-roof"></div>
                        <div className="house2-main-window"></div>
                      </div>
                      <div className="house2-base">
                        <div className="house2-base-roof"></div>
                        <div className="window-wrap">
                          <div className="house2-window"></div>
                          <div className="house2-window"></div>
                          <div className="house2-window"></div>
                          <div className="house2-window"></div>
                        </div>
                      </div>
                      <div className="house2-door"></div>
                    </div>
                  </div>
                  <div className="building-wrapper">
                    <div className="building building2 building3">
                      <div className="window-wrap">
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-window"></div>
                        <div className="building-door"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tree-wrapper">
                    <div className="tree">
                      <div className="base"></div>
                    </div>
                  </div>
                  <div className="house-wrapper">
                    <div className="house1 house1a">
                      <div className="house1-roof"></div>
                      <div className="window-wrap">
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                        <div className="house1-window"></div>
                      </div>
                      <div className="house1-center">
                        <div className="house1-center-roof"></div>
                        <div className="window-wrap">
                          <div className="house1-window window-center"></div>
                          <div className="house1-center-door"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="slide__inner slide--right">
              <h1>Manage Retail Locations</h1>
              <p>Access your retailers locations</p>
              {/* <center>
                <div
                  onClick={() => {
                    SaveHomeRoute("/home/retailer_location");
                    window.open("/");
                  }}
                  className="side_nav_item btn btn-primary text-white"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Regions
                </div>
              </center> */}
            </article>
          </section>
        ) : (
          <div />
        )}

        {permissions.can_manage_product ? (
          <section className="slide slide-3">
            <article className="slide__inner slide--left">
              <div className="onboard_container container--slide-3">
                <header className="header--slide-3">
                  <nav className="header__nav">
                    <div className="header__nav__logo">
                      <p>LOGO</p>
                    </div>
                    <div className="header__nav__cta">Lorem</div>
                  </nav>
                  <div className="header__hero">
                    <div className="header__hero__table"></div>
                    <div className="header__hero__chair"></div>
                  </div>
                </header>
                <main className="main--slide-3">
                  <section className="section--about">
                    <h5>About</h5>
                    <div className="section__stripe"></div>
                    <div className="section__stripe"></div>
                  </section>
                  <section className="section--testimonials">
                    <div className="section__logo">
                      <i className="material-icons">person</i>
                    </div>
                    <div className="section__info">
                      <div className="section__stripe section__info__stripe"></div>
                      <div className="section__stripe section__info__stripe"></div>
                    </div>
                  </section>
                </main>
              </div>
            </article>
            <article className="slide__inner slide--right">
              <h1>Manage Units </h1>
              <p>Custimize your units as per your business needs</p>
              {/* <center>
                <div
                  onClick={() => {
                    SaveHomeRoute("/home/product_master");
                    window.open("/");
                  }}
                  className="side_nav_item btn btn-primary text-white"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Manage
                </div>
              </center> */}
            </article>
          </section>
        ) : (
          <div />
        )}
        {permissions.can_manage_product ? (
          <section className="slide slide-4">
            <article className="slide__inner slide--left">
              <div className="onboard_card card--store">
                <div className="card__logo">
                  <i className="material-icons fas fa-microphone"></i>
                </div>
                <div className="card__info">
                  <h5 className="card__info__name store__info">Microphones</h5>
                  <div className="card__data">
                    <p className="card__data__supplier">James</p>
                    <p className="card__data__callout">Grab it soon...</p>
                  </div>
                </div>
                <div className="card__price">
                  <p className="card__price__price">€ 15.95</p>
                  <button className="onboard_btn onboard_btn__storage onboard_btn--active">
                    Buy
                  </button>
                  <p className="card__price__storage">12 left</p>
                </div>
              </div>
              <div className="onboard_card card--store">
                <div className="card__logo">
                  <i className="material-icons fas fa-laptop"></i>
                </div>
                <div className="card__info">
                  <h5 className="card__info__name store__info">Computers</h5>
                  <div className="card__data">
                    <p className="card__data__supplier">James</p>
                    <p className="card__data__callout">Grab it soon...</p>
                  </div>
                </div>
                <div className="card__price">
                  <p className="card__price__price">€ 315</p>
                  <button className="onboard_btn onboard_btn__storage onboard_btn--active">
                    Buy
                  </button>
                  <p className="card__price__storage">9 left</p>
                </div>
              </div>
              <div className="onboard_card card--store">
                <div className="card__logo">
                  <i className="material-icons fas fa-mobile"></i>
                </div>
                <div className="card__info">
                  <h5 className="card__info__name store__info">
                    Mobile phones
                  </h5>
                  <div className="card__data">
                    <p className="card__data__supplier">James</p>
                    <p className="card__data__callout">Grab it soon...</p>
                  </div>
                </div>
                <div className="card__price">
                  <p className="card__price__price">€ 215</p>
                  <button className="onboard_btn onboard_btn__storage onboard_btn--active">
                    Buy
                  </button>
                  <p className="card__price__storage">4 left</p>
                </div>
              </div>
            </article>
            <article className="slide__inner slide--right">
              <h1>Check Store</h1>
              <p>Make it easy for retailers to find your products</p>
              {/* <center>
                <div
                  onClick={() => {
                    SaveHomeRoute("/home/products");
                    window.open("/");
                  }}
                  className="side_nav_item btn btn-primary text-white"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Products
                </div>
              </center> */}
            </article>
          </section>
        ) : (
          <div />
        )}
      </div>
      <section id="onboard_pagination" className="pagination">
        {createDots(slideLength)}
      </section>
    </div>
  );
}
