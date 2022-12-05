import React from "react";
import Footer from "../../component/footer";
import Header from "../../component/header";

export default function Home() {
  return (
    <>
      <Header />
      <a
        href="https://api.whatsapp.com/send?phone=91 9940610786&text=Hello"
        className="whatsapp-button"
        target="_blank"
        style={{ position: "fixed", right: "15px", bottom: "15px" }}
      >
        <img
          src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
          alt="whatsapp"
        />
      </a>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Custom Web Design Company</h1>
              <h2>Engineering Websites For Superior Performance</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section> */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-12">
                <h3 style={{ fontStyle: "italic" }}>
                  We are one of the best Web Development and Digital Marketing
                  Companies in India, known for employing cutting-edge online
                  marketing tactics and sophisticated technologies to give your
                  company a digital advantage. With "Ailena Technologies" at
                  your side for all of your digital marketing needs, you can
                  outperform your rivals and stand out from the crowd.
                </h3>
              </div>
              {/* <div className="col-lg-6 pt-4 pt-lg-0">
              <img src="assets/img/skills.png" class="img-fluid" alt=""/>
              </div> */}
            </div>
          </div>
        </section>
        {/* <section id="why-us" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>
                  Integrating
                    <strong>BRAND STRATEGY</strong>
                    with <strong>DIGITAL INITIATIVES</strong>
                    to improve <strong>CUSTOMER EXPERIENCES</strong>
                    online & offline.
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{backgroundImage : "url(assets/img/why-us.png)"}}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section> */}
        <section id="skills" className="skills" style={{ padding: "0px 0px" }}>
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img src="assets/img/why-us.png" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
                style={{ marginTop: "12%" }}
              >
                <h3>
                  Integrating
                  <strong> BRAND STRATEGY </strong>
                  with <strong>DIGITAL INITIATIVES </strong>
                  to improve <strong>CUSTOMER EXPERIENCES </strong>
                  online & offline.
                </h3>

                {/* <div className="skills-content">
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      Photoshop <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
            </div>

            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <a href="">Branding & Digital Strategies</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="">Web Design & App Development</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">Results-Driven Digital Marketing</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4>
                    <a href="">Custom Software Development</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Ready To Discuss Your Project?</h3>
                <p style={{ fontSize: "123%" }}>
                  {" "}
                  Mobile number: +91 - 9940610786 <br />
                  Email-Id: info@ailena.in
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src="assets/img/web1.png"
                    className="img-fluid"
                    alt=""
                    style={{ height: "290px" }}
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Minsa Sports</h4>
                  <a
                    href="https://minsasports.com/"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src="assets/img/web2.png"
                    className="img-fluid"
                    alt=""
                    style={{ height: "290px" }}
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Padmavathi Labs</h4>
                  <a
                    href="https://padmavathilabs.com/"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src="assets/img/web3.png"
                    className="img-fluid"
                    alt=""
                    style={{ height: "290px" }}
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Connect and Collabs</h4>
                  <a
                    href="https://connectandcollabs.com/"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="section-title">
              <h2 style={{ color: "white" }}>Got Talent?</h2>
              <h4 style={{ color: "white" }}>
                <strong>
                  We are always seeking talented people with passion, experience
                  and ability to drive value for our clients If your're
                  interested in joining the Ailena, send your resume and cover
                  letter to jobs@ailena.in
                </strong>
              </h4>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>
                TAKE THE SILK ROAD TO DIGITIZING <br />
                YOUR BUSINESS GROWTH
              </h2>
              {/* <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p> */}
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      #413, Gali Street, Tirupati, Tirupati(D), Andhra Pradesh
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@ailena.in</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 - 9940610786</p>
                  </div>
                  <div className="footer-links">
                    <h4>Follow Us On</h4>

                    <div style={{ marginLeft: "5%" }}>
                      <a href="https://www.instagram.com/ailenatech" className="phone instagram">
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/ailenatechnologies/" className="phone linkedin">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
