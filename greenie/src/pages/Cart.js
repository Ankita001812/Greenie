import React, { useState } from "react";

const Cart = ({cartItems}) => {

  const [items, setItems] = useState(cartItems ||  []) ;

  function deleteItem (index) {
   if(index !== -1){
    const newItems =[...items];
    // method to remove that item
    newItems.splice(index, 1);
    setItems(newItems);
   }
   alert(`${items[index].name} has been REMOVED from the Shopping Cart`);
  }
  
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
    <h1 className="display-5 fw-bold text-center text-info my-4">
      Your Shopping Cart
    </h1>

    <div className="row">
      {items.map((item, i) => (
        <div className="col-12 d-flex justify-content-center" key={i} style={{paddingBottom : '50px'}}>
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
                  // onClick={() => decrement(i)}
                >
                  -
                </button>
                <button type="button" className="btn btn-outline-primary">
                  {item.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  // onClick={() => increment(i)}
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
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Cart;
