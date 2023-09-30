import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
export default function Home() {
  let [foodItems, setFoodItems] = useState([]);
  let [foodCategory, setFoodCategory] = useState([]);
  let [search, setSearch] = useState(" ");

  let foodFetching = async () => {
    let res = await fetch("http://localhost:5000/foodDetails");
    let result = await res.json();
    setFoodCategory(result[1]);
    console.log(result[0]);
    setFoodItems(result[0]);
  };
  useEffect(() => {
    foodFetching();
  }, []);
  return (
    <>
      <Nav></Nav>
      <>
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
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
      </>
      <div className=" mt-3 container">
        {foodCategory != [] ? (
          foodCategory.map((e) => {
            return (
              <div className="">
                <div
                  key={e._id}
                  className="text-light fs-3 mt-lg-5 mb-3 fw-bold"
                >
                  {e.CategoryName}
                </div>
                <hr className="text-light container"></hr>
                <div className="">
                  <div className="row">
                    {foodItems != [] ? (
                      foodItems
                        .filter(
                          (m) =>
                            m.CategoryName == e.CategoryName &&
                            m.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((t) => {
                          return (
                            <div className="col-lg-3 col-md-6 col-12 ">
                              <Card
                                key={t._id}
                                img={t.img}
                                options={t.options[0]}
                              ></Card>
                            </div>
                          );
                        })
                    ) : (
                      <div className="text-light">No such Data Found</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-light">No Such Data Found</div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
