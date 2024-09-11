import React from "react";
import "./Veg.css";

import brocoli from "../images/brocoli.jpg";
import brownonion from "../images/brownonion.png";
import redonion from "../images/redonion.png";
import cherrytomato from "../images/cherrytomato.jpg";
import garlic from "../images/garlic.jpg";
import greenchilli from "../images/greenchilli.jpg";
import potato from "../images/potato.png";
import redcapsicum from "../images/redcapsicum.jpg";
import carrots from "../images/organic-carrots.jpg";
import tomatoes from "../images/organic-tomatoes.jpg";
import cabbage from "../images/cabbage.jpg";

const Veg = ({ addToCart , username}) => {
  const vegies = [
  
    {
      name: "Cherry Tomatoes",
      price: 0.26,
      per: "1EA",
      quantity: 0,
      img: cherrytomato,
      rate: 0,
    },

    {
      name: "Green Chilli",
      price: 7.6,
      per: "1OOG",
      quantity: 0,
      img: greenchilli,
      rate: 0,
    },

    {
      name: "Red Capsicum",
      price: 1.98,
      per: "1EA",
      quantity: 0,
      img: redcapsicum,
    },
   
    {
      name: "Organic Carrots",
      price: 2.99,
      per: "kg",
      quantity: 0,
      img: carrots,
      rate: 0,
    },
    {
      name: "Organic Tomatoes",
      price: 4.99,
      per: "kg",
      quantity: 0,
      img: tomatoes,
      rate: 0,
    },
    {
      name: "Red Onion",
      price: 9.85,
      per: "kg",
      quantity: 0,
      img: redonion,
      rate: 0,
    },
    {
      name: "Cabbage Savoy Half Each",
      price: 4.99,
      per: "1EA",
      quantity: 0,
      img: cabbage,
      rate: 0,
    },
    {
      name: "Garlic Head",
      price: 1.55,
      per: "1EA",
      quantity: 0,
      img: garlic,
      rate: 0,
    },
    {
      name: "Fresh Broccoli",
      price: 2.15,
      per: "1EA",
      quantity: 0,
      img: brocoli,
      rate: 0,
    },

    {
      name: "Potato Brushed",
      price: 0.73,
      per: "1EA",
      quantity: 0,
      img: potato,
      rate: 0,
    },
    {
      name: "Brown Onion",
      price: 2.45,
      per: "kg",
      quantity: 0,
      img: brownonion,
      rate: 0,
    },
  ];

  // const [veg, setVeg] = useState(vegies);

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h1 className="display-5 fw-bold text-center text-info my-4">
        Vegetables
      </h1>

      <div className="row">
        {vegies.map((v, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={i}>
            <div className="card h-100">
              <img src={v.img} className="card-img-top" alt={v.name} />
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text">
                  <strong>${v.price}</strong>/{v.per}
                </p>
              </div>
             
              {username && username !== null && (
                <div className="btn">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => addToCart(v)}
                >
                  Add to Cart
                </button>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veg;
