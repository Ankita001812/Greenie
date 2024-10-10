import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);
  const [total, setTotal] = useState(0);

    // its used so that every time there is some change in the cart total can be updated without reloading
    useEffect(() => {
      let newTotal = 0;
      items.map((item) => {
        // iterating through the array called items
        newTotal += item.price * item.quantity;
        return newTotal;
      });
      setTotal(newTotal);
    }, [items]);
  

  function increment(index) {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  }

  function decrement(index) {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity--;
      setItems(newItems);
    }
  }

  function deleteItem(index) {
    if (index !== -1) {
      const newItems = [...items];
      // method to remove that item
      newItems.splice(index, 1);
      setItems(newItems);
    }
    alert(`${items[index].name} has been REMOVED from the Shopping Cart`);
  }

  return (
    <div className="container" style={{ paddingTop: "90px" }}>
      <h1 className="display-6 fw-bold text-center text-info my-4">
        Your Shopping Cart
      </h1>

      <div className="row">
        {items.map((item, i) => (
          <div
            className="col-12 d-flex justify-content-center"
            key={i}
            style={{ paddingBottom: "50px" }}
          >
            <div className="card h-100">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>${item.price}</strong>/{item.per}
                </p>
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => decrement(i)}
                >
                  -
                </button>
                <button type="button" className="btn btn-outline-primary">
                  {item.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => increment(i)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteItem(i)}
                >
                  Remove Item
                </button>
              </div>
              <h3>
                Total: <strong>${item.price * item.quantity}</strong>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <h3>
        <br />
        <br />
        <Link to="/creditcardcheckerpage">
          <button type="button" className="btn btn-outline-success">
            Pay now: ${total}
          </button>
        </Link>
      </h3>
    </div>
  );
};

export default Cart;
