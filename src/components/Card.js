import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  console.log(priceOptions);
  return (
    <div className="">
      <div>
        <div
          className="card bg-dark border text-light border-1 mt-5 mt-lg-3 "
          style={{
            // width: "18rem",
            maxHeight: "550px",
            boxShadow: "0px 0px 5px white",
          }}
        >
          <img
            src={props.img}
            className="card-img-top "
            alt="..."
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is important text.</p>
          </div>
          <div className="container w-100">
            <select className=" m-lg-1 h-100 bg-success text-light fs-5 rounded border-none">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i}>
                    {i}
                  </option>
                );
              })}
            </select>
            <select className="bg-success m-lg-1 h-100 rounded text-light fs-5 border-none">
              {priceOptions.map((data) => {
                return (
                  <option value={data} key={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline fs-5 fw-bold">Total Price</div>
            <hr  className="text-light"/>
            <div>
              <button className="btn btn-success text-light fw-bold mb-3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
