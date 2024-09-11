import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Veg from "./pages/Veg";
import Fru from "./pages/Fru";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

function App() {
  const [username, setUsername] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exist = cartItems.find((cartItem) => cartItem.name === item.name);

    if (exist) {
      alert(`${item.name} is been ALREADY added to the cart`);
    } else {
      const newItems = { ...item, quantity: 1 };
      setCartItems((prevCart) => [...prevCart, newItems]);
      console.log(cartItems);
      alert(`${item.name} has been added to the Shopping Cart`);
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const user = JSON.parse(localStorage.getItem("gusernamelogged"));
      console.log(user);
      if (user) {
        setUsername(user);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav username={username} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/veg"
              element={<Veg addToCart={addToCart} username={username} />}
            />
            <Route
              path="/fruits"
              element={<Fru addToCart={addToCart} username={username} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/shoppingcart"
              element={<Cart cartItems={cartItems} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
