// // import logo from './logo.svg';
// import "./App.css";
// import Nav from "./pages/Nav";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Veg from "./pages/Veg";
// import Fruits from "./pages/Fru";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/veg" element={<Veg />} /> {/* Vegetables route */}
//           <Route path="/fruits" element={<Fruits />} /> {/* Fruits route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Veg from './pages/Veg';
import Fru from './pages/Fru';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/fruits" element={<Fru />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
