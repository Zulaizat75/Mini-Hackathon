import React from "react";
import "../../App.css";
import "./Aboutus.css";

function Aboutus() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div
          className="aboutus"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/Hero2.jpg)`,
          }}
        >
          <h1 className="aboutus">ABOUT US</h1>
        </div>
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-md-10 mt-3 mb-3">
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="w-100 p-md-5 d-flex justify-content-end">
                    <img
                      src="/image/Story3.jpg"
                      className="aboutus-img"
                      alt="story"
                    ></img>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4">
                    <h3>COMPANY OVERVIEW</h3>
                    <div className="dbox w-100 d-flex align-items-start mt-4">
                      <div className="text pl-3">
                        <p>
                          <span>
                            Coffee Shop Sdn Bhd is a vibrant and contemporary
                            coffee haven established in 2024. Our commitment to
                            creating a unique coffee experience sets us apart,
                            as we blend the rich traditions of coffee
                            craftsmanship with modern aesthetics. At BeanBliss,
                            we believe in transforming a simple cup of coffee
                            into a moment of pure indulgence.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <h2 className="section-title">Meet Our Coffee Enthusiasts</h2>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="/image/male1.jpg"
                className="team-img"
                alt="Ariff"
              ></img>
              <h3>Ariff Fakhri</h3>
              <div className="team-info">
                <p>CEO</p>
              </div>
              <p>
                {" "}
                Ariff is our co-founder and has developed search strategies for
                a variety of clients from international brands to medium sized
                businesses for over five years.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="/image/male4.jpg"
                className="team-img"
                alt="Anudiip"
              ></img>
              <h3>Anudiip</h3>
              <div className="team-info">
                <p>Co-Founder</p>
              </div>
              <p>
                Graduating with a degree in Spanish and English, Anudiip has
                always loved coffee and now she's lucky enough to do it as part
                of his job.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="/image/male5.jpg"
                className="team-img"
                alt="Shashi"
              ></img>
              <h3>Shashi</h3>
              <div className="team-info">
                <p>Head Barista</p>
              </div>
              <p>
                Meet shashi, a true virtuoso in the world of coffee mixing. His
                talent transcends the ordinary, transforming the simple act of
                brewing coffee into an art form. With an intuitive understanding
                of flavor profiles and an unwavering commitment to perfection..
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="team-item">
              <img
                src="/image/male2.jpg"
                className="team-img"
                alt="Zulaizat"
              ></img>
              <h3>Zulaizat</h3>
              <div className="team-info">
                <p>Barista</p>
              </div>
              <p>
                Zulaizat has mastered the delicate balance of coffee mixing that
                makes each cup a symphony of taste.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="team-item">
              <img src="/image/male3.jpg" className="team-img" alt="Amir"></img>
              <h3>Amir</h3>
              <div className="team-info">
                <p>Marketing Manager</p>
              </div>
              <p>
                Amir first fell in love with digital marketing at the
                university. He loves to learn, and looks forward to being part
                of the coffee making journey for many years.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
