import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Home';
import Product from './Product';
import About from './About';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">Mahindra & Mahindra</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/payment">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">About</Link>
                </li>
              </ul>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-info" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

       
       

        
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </div>

       
       
      </>
    </Router>
  );
}

export default App;
