// import logo from './logo.svg';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router } from "react-router-dom";
// import Home from './pages/Home';

function App() {
  return (
      <Router>
          <div className="App">
           
           <Nav/>
           {/* <Routes>
           <Route path="/" element={<Home />} />
           </Routes> */}
          </div>
      </Router>
  );
}

export default App;
