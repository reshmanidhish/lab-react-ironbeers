import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import homeIcon2 from './../assets/homeIcon2.png'
const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => {
        setRandomBeer(data);
      })
      .catch((error) => console.log('Error fetching random beer:', error));
  }, []);

  return (
   <>

      <div className="homedesign">
      <Navbar className="my-2" color="dark" dark>
      <Link to="/"> 
      <img src={homeIcon2} alt="Logo" style={{ width: '100px', height: 'auto' }} /> Home</Link>
        
        {/* <Link to="/">Home</Link> */}
      
      </Navbar>
    
    </div>
     <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ height: '200px' }} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
</>
  );
};

export default RandomBeer;
