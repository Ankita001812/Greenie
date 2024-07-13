
import React from "react";
import organicTomatoesImage from "../images/organic-tomatoes.jpg";
import organicApplesImage from "../images/organic-apples.jpg";
import organicKiwisImage from "../images/organic-kiwis.jpg";

const Home = () => {
  return (
    <div className="display-4 text-center text-info" style={{padding: "200px"}}>
      {/* <i>Weekly organic specials</i> */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-50 h-40 mx-auto img-fluid"
              src={organicKiwisImage}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block text-start">
              <h2 className="fw-bold text-light display-4"><i>Organic Kiwi</i></h2>
              <p className="text-danger fw-bold"><del>was $5.50</del></p>
              <p className="text-warning fw-bold"><strong>Now <mark>$4.99</mark></strong></p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 h-40 mx-auto img-fluid"
              src={organicApplesImage}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block text-start">
              <h2 className="fw-bold text-light display-4"><i>Organic Apples</i></h2>
              <p className="text-danger fw-bold"><del>was $3.50</del></p>
              <p className="text-warning fw-bold"><strong>Now <mark>$2.99</mark></strong></p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 h-40 mx-auto img-fluid"
              src={organicTomatoesImage}
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block text-start">
              <h2 className="fw-bold text-light display-4"><i>Organic Tomatoes</i></h2>
              <p className="text-danger fw-bold"><del>was $5.30</del></p>
              <p className="text-warning fw-bold"><strong>Now <mark>$4.99</mark></strong></p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
