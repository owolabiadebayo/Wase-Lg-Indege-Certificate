import React, { useState } from "react";
import "./style.css";
import logo from "../Assets/plateau.png";
// import logo1 from "../Assets/L.png";
import { useDispatch } from "react-redux";
import { setData } from "../utils/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../Assets/plateau.png";
import axios from "axios";

function Home() {
  const [selected, setSelected] = useState("");
  console.log(selected);
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const city = ["Bashar", "Nyalum", "Gaji", "Kampani", "Gujus", "yuli"];
  const city2 = ["Mavo", "Kadarko", "Kumgbong", "kumbur", "Wadata", "Gimbi"];
  const city3 = ["Kuyambana", "Danbiram", "Mallam Adams", "Garkuwa"];
  const city4 = ["Wase Tofa", "Lamba", "Yola Wakat", "Saluwe"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "BASHAR DISTRICT") {
    type = city;
  } else if (selected === "KADARKO DISTRICT") {
    type = city2;
  } else if (selected === "WASE DISTRICT") {
    type = city3;
  } else if (selected === "LAMBA DISTRICT") {
    type = city4;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  // const dispatch = useDispatch();
  let Navigate = useNavigate();

  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Family, setFamily] = useState("");
  const [Landmark, setLandmark] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const data = {
    selected,
    Address1,
    Address2,
    Family,
    Landmark,
  };
  const handleSubmit = (event) => {
    axios
      .post("https://localhost:8000/api/", data)
      .then((response) => response.json())
      .then((data) => {
        Navigate("/download");
      });
  };

  return (
    <div className="container">
      <header class="header" id="header">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
        <nav class="nav container">
          <a href="#" class="navbar-brand">
            <br /> WaseLG
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
      <div className="publish-container">
        {/* <div className="publish">
          <div className="publish-section-footer">
            <p>Approved by NIMC</p>
          </div>
        </div> */}
        <main class="main">
          <section class="home section" id="home">
            <div class="home__container container grid">
              <img src={img} alt="" />
            </div>
            <div class="home__data">
              <h1 class="home__title">Welcome to wase local government</h1>
              <p class="home__description"></p>
              <Link to="/Payment" class="button">
                Apply for local government certificate
              </Link>
            </div>
          </section>
        </main>
        <div className="publish-form">
          <form className="form-box" onSubmit={handleSubmit}>
            <p>
              District<span className="form-box-asterix">*</span>
            </p>
            <div>
              <select
                onChange={changeSelectOptionHandler}
                className="form-box-input1"
              >
                <option>Choose...</option>
                <option>BASHAR DISTRICT</option>
                <option>KADARKO DISTRICT</option>
                <option>WASE DISTRICT</option>
                <option>LAMBA DISTRICT</option>
              </select>
            </div>
            <div>
              <p>
                Wards<span className="form-box-asterix">*</span>
              </p>
              <select className="form-box-input1">
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </div>

            <p>
              Family Head Name
              <span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={Family}
              onChange={(e) => setFamily(e.target.value)}
              required
            />

            <p>
              Address Line 1<span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={Address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
            <p>
              Address line 2<span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={Address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
            <p>
              Landmark<span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={Landmark}
              onChange={(e) => setLandmark(e.target.value)}
              required
            />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>

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
    </div>
  );
}

export default Home;
