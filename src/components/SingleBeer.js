import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import homeIcon2 from './../assets/homeIcon2.png'
const SingleBeer = () => {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
      })
      .catch((error) => console.log('Error fetching beer:', error));
  }, [beerId]);

  return (
    <div className="homedesign">
    <Navbar className="my-2" color="dark" dark>
      
      <div className="navbar">
      
      <Link to="/">
      
      <img src={homeIcon2} alt="Logo" style={{ width: '100px', height: 'auto' }} /> Home</Link>
      </div>
    </Navbar>
      <img src={beer.image_url} alt={beer.name} style={{ height: '200px' }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default SingleBeer;
