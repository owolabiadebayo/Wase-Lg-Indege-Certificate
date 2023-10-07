import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import img from "../Assets/plateau.png";

function Homepage() {
  return (
    <>
      <header class="header" id="header">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
        <nav class="nav container">
          <a href="#" class="navbar-brand">
            <br /> Wase
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                  Verify Wase LG Certificate
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  Reprint Certificate
                </a>
              </li>
              <li class="nav__item">
                <a href="#services" class="nav__link">
                  Services
                </a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link">
                  Contact Us
                </a>
              </li>
              <li class="nav__item">
                <a
                  id="language-switch"
                  class="button button-link"
                  style={{
                    backgroundColor: "#f9a826",
                    color: "#fff",
                    padding: "5px",
                    textDecoration: "none",
                    borderRadius: "5px",
                  }}
                >
                  Verify Certificate
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main class="main">
        <section class="home section" id="home">
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>
            Welcome to Wase Local Government Indegene Cerificate Portal
          </h1>
          <div class="home__container container grid">
            <img src={img} alt="" />

            <div class="home__data">
              <h1 class="home__title">Welcome to wase local government</h1>
              <p class="home__description"></p>
              <Link to="/Payment" class="button">
                Apply for local government certificate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer section">
        <div class="footer__container container grid">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              Wase Local Government
            </a>
            <p class="footer__description">
              Find Your specialty <br /> Faster and Easier
            </p>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Gallery</h3>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Community News</h3>
            {/* <ul class="footer__links">
              <li>
                <a href="#" class="footer__link">
                  Support
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Questions
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Usage help
                </a>
              </li>
            </ul> */}
          </div>

          <div class="footer__social">
            <a href="#" target="_blank" class="footer__social-link">
              <i class="bx bxl-facebook-circle "></i>
            </a>
            <a href="https://x.com" target="_blank" class="footer__social-link">
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="footer__social-link"
            >
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>

        {/* <p class="footer__copy">&#169; Geosoft. All right reserved</p> */}
      </footer>

      <a href="#" class="scrollup" id="scroll-up">
        <i class="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </>
  );
}

export default Homepage;
