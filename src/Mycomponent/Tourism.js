import React, { useState } from 'react';
import image from './jk.jpg';
 // You can define your CSS styles in this file

function DestinationComponent() {
  return (
    <div>
      <h2>Popular Destinations</h2>
      <ul>
        <li>Kanaka Durga Temple</li>
        <li>Bhavani island</li>
        <li>Prakasham barriage</li>
      </ul>
    </div>
  );
}

function ActivitiesComponent() {
  return (
    <div>
      <h2>Popular Activities</h2>
      <ul>
        <li>Hiking</li>
        <li>Sightseeing</li>
        <li>Shopping</li>
      </ul>
    </div>
  );
}

function BookingComponent() {
  const [formData, setFormData] = useState({ destination: '', date: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Your trip to ${formData.destination} on ${formData.date} has been booked!`);
    setFormData({ destination: '', date: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <div>
      <h2>Book Your Trip</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleInputChange} required /><br />
      
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required /><br />
      
        <button type="submit">Book Now</button>
      </form>
    </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DestinationComponent />
      <ActivitiesComponent />
      <BookingComponent />
    </div>
  );
}

export default App;
