import "./sass/app.scss";
//import "./css/icon-font.css";
import logo from "./img/logo-white.png";
import nat1 from "./img/nat-1-large.jpg";
import nat2 from "./img/nat-2-large.jpg";
import nat3 from "./img/nat-3-large.jpg";
import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";
import videoMp4 from "./img/video.mp4";
import videoWebm from "./img/video.webm";


const App = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoor</span>
            <span className="heading-primary--sub">Is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-large">
            <h2 class="heading-secondary">
              Exciting tours for adenturous people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  className="composition__photo composition__photo--p1"
                  src={nat1}
                  alt="Photo 1"
                />
                <img
                  className="composition__photo composition__photo--p2"
                  src={nat2}
                  alt="Photo 2"
                />
                <img
                  className="composition__photo composition__photo--p3"
                  src={nat3}
                  alt="Photo 3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4"></div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon lnr lnr-earth u-margin-bottom-small" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon lnr lnr-map-marker u-margin-bottom-small" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet Nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon lnr lnr-map u-margin-bottom-small" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon lnr lnr-heart-pulse u-margin-bottom-small" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-large">
            <h2 class="heading-secondary">Most popular tours</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The sea explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 days tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$279</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The forest hiker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>7 days tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The snow adventurer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 days tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$897</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>

        <section className="section-stories">

          <div className="bg-video">
            <video className="bg-video__content" autoPlay="true" muted="true" loop>
              <source src={videoMp4} type="video/mp4"/>
              <source src={videoWebm} type="video/webm"/>
              Your browser is not supported!
            </video>
          </div>

          <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img className="story__img" src={nat8} alt="Person on a tour"/>
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  I had the best week ever whit my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img className="story__img" src={nat9} alt="Person on a tour"/>
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">Read all stories &rarr;</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
