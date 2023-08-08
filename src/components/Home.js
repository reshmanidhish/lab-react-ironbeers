import React from "react";
import { Link } from "react-router-dom";
import beers from "./../assets/beers.png";
import "./../assets/HomePage.css";
import { Navbar, NavbarBrand } from "reactstrap";

const Home = () => {
  return (
    <div className="homedesign">
      <Navbar className="my-2" color="dark" dark>
        
        <div className="navbar">
          <div>
            <Link to="/beers">All Beers</Link>
          </div>
          <div>
            <Link to="/random-beer">Random Beer</Link>
          </div>
          <div>
            <Link to="/new-beer">New Beer</Link>
          </div>
        </div>
      </Navbar>

      <h1>Welcome to Ironbeers</h1>
      <img src={beers} alt="beer" />
    </div>
  );
};

export default Home;
