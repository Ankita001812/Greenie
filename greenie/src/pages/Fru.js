import React from "react";

import avocado from "../images/avocado.png";
import kiwi from "../images/organic-kiwis.jpg";
import apple from "../images/organic-apples.jpg";
import whitegrape from "../images/whitegrapes.jpg";
import redgrape from "../images/redgrapes.jpg";
import banana from "../images/banana.jpg";
import apple1 from "../images/apple.jpg";
import greenapple from "../images/greenapples.jpg";
import orangenavel from "../images/orangenavel.jpg";
import blueberries from "../images/blueberries.jpg";

const Fru = ({addToCart}) => {
  const frus = [
    {
      name: "Kiwi",
      price: 0.99,
      per: "1EA",
      quantity: 0,
      img: kiwi,
      rate: 0,
    },
    {
      name: "Apple",
      price: 1.49,
      per: "1EA",
      quantity: 0,
      img: apple,
      rate: 0,
    },
    {
      name: "White seedless Grapes",
      price: 5.23,
      per: "1EA",
      quantity: 0,
      img: whitegrape,
      rate: 0,
    },
    {
      name: "Red seedless Grapes",
      price: 0.99,
      per: "1EA",
      quantity: 0,
      img: redgrape,
      rate: 0,
    },
    {
      name: "Cavendish Bananas",
      price: 0.72,
      per: "1EA",
      quantity: 0,
      img: banana,
      rate: 0,
    },
    {
      name: "Fresh Pink Lady Apples",
      price: 0.79,
      per: "1EA",
      quantity: 0,
      img: apple1,
      rate: 0,
    },
    {
      name: "Fresh Granny Smith Apples",
      price: 0.68,
      per: "1EA",
      quantity: 0,
      img: greenapple,
      rate: 0,
    },
    {
      name: "Orange Navel",
      price: 0.68,
      per: "1EA",
      quantity: 0,
      img: orangenavel,
      rate: 0,
    },
    {
      name: "Blueberries 125g Punnet",
      price: 7.5,
      per: "125G",
      quantity: 0,
      img: blueberries,
      rate: 0,
    },
    {
      name: "Avocado Shepard",
      price: 1.0,
      per: "1EA",
      quantity: 0,
      img: avocado,
      rate: 0,
    },
  ];
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h1 className="display-5 fw-bold text-center text-info my-4">Fruits</h1>

      <div className="row">
        {frus.map((f, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <div className="card h-100">
              <img src={f.img} className="card-img-top" alt={f.name} />
              <div className="card-body">
                <h5 className="card-title">{f.name}</h5>
                <p className="card-text">
                  <strong>${f.price}</strong>/{f.per}
                </p>
                <div className="btn">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => addToCart(f)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fru;
