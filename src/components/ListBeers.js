import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeIcon2 from './../assets/homeIcon2.png'
import { Navbar } from 'reactstrap';
const ListBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => console.log('Error fetching beers:', error));
  }, []);

  return (
  
     
      <div className="homedesign">
      <Navbar className="my-2" color="dark" dark>
        
        <div className="navbar">
        
        <Link to="/">
        
        <img src={homeIcon2} alt="Logo" style={{ width: '100px', height: 'auto' }} /> Home</Link>
        </div>
      </Navbar>

  
      
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ListBeers;

