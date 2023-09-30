import React, { useEffect, useState } from "react";
// import './Carousel.css'

export default function Carousel(props) {
  let [search,setSearch]=useState([]);
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade cc"
        data-bs-ride="carousel"
        style={{ objectFit: "cover !important" }}
      >
        <div class="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex">
              <input
                type="search"
                className="form-control me-2 bg-dark text-light border-none"
                placeholder="search"
              />
              <button className="btn btn-success">Search</button>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              src="back1.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh", filter: "brightness(40%)" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="back2.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh", filter: "brightness(40%)" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="back3.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh", filter: "brightness(40%)" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
