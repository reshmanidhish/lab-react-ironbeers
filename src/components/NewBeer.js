import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import homeIcon2 from './../assets/homeIcon2.png'
const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the POST request to create a new beer using formData
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          
          console.log('New beer created successfully!');
        } else {
        
          console.log('Failed to create a new beer');
        }
      })
      .catch((error) => console.log('Error creating a new beer:', error));
  };

  return (
   
    <div className="homedesign">
    <Navbar className="my-2" color="dark" dark>
      
      <div className="navbar">
      
      <Link to="/">
      
      <img src={homeIcon2} alt="Logo" style={{ width: '100px', height: 'auto' }} /> Home</Link>
      </div>
    </Navbar>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          First Brewed:
          <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required />
        </label>
        <label>
          Brewer Tips:
          <input type="text" name="brewer_tips" value={formData.brewer_tips} onChange={handleChange} required />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contributed by:
          <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required />
        </label>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
