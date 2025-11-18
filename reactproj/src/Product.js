import React from "react";
import c1 from "./car1.jpeg";
import c2 from "./car2.jpeg";
import c3 from "./car3.jpeg";
import c4 from './car4.jpeg';
import c5 from './car5.jpeg';
import c6 from './car6.jpeg';

const Product = () => {
  return (
    <div className="container mt-4">
      <h2>Cars</h2>
      <p>Sport Utility Vehicles</p>

      
      <div className="card-group">
     <div className="card border-dark mb-5">
    <img src={c1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Thar</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div className="card border-dark mb-5">
    <img src={c2} className="card-img-top" style={{height: "33rem"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Scorpio Classic</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
   
  </div>
  <div className="card border-dark mb-5">
    <img src={c3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">XUV 7OO</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>




{/* 2nd Card Group*/}


<div className="card-group">
  <div className="card border-dark mb-5">
    <img src={c4} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">New</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
    </div>
  </div>
  <div className="card border-dark mb-5">
    <img src={c5} className="card-img-top" style={{height: "26.4rem"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bolero</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div className="card border-dark mb-5">
    <img src={c6} className="card-img-top" style={{height: "26.4rem"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">KUV 1OO</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>



    </div>
  );
};

export default Product;
