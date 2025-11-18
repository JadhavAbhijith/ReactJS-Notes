import React from "react";
import h1 from "./mahindra home.jpeg";
import h2 from "./mahindra home2.jpeg";
import h3 from "./mahihome3.jpeg";

const Home = () =>
{
    return (
       <div>
        <h2><center>Official Website of the Mahindra Company</center></h2>
        <h3><center>Dealer of all kinds of vehicles</center></h3>

 <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={h1} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={h2} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={h3} className="d-block w-75 mx-auto" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        </div>
    );
};

export default Home;