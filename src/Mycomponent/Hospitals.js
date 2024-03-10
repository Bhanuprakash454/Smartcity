import React, { useState } from 'react';
import image from './hk.jpg';

function Hospitals() {
  const hospitals = [
    { name: "City Hospital", specialties: ["Cardiology", "Orthopedics"], consultationNumber: "+1234567890" },
    { name: "General Hospital", specialties: ["Pediatrics", "Internal Medicine"], consultationNumber: "+9876543210" },
    { name: "Regional Hospital", specialties: ["Oncology", "Neurology"], consultationNumber: "+1122334455" }
    // Add more hospitals as needed
  ];

  const [formData, setFormData] = useState({ hospital: '', date: '', time: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Your appointment at ${formData.hospital} on ${formData.date} at ${formData.time} has been booked!`);
    setFormData({ hospital: '', date: '', time: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '150vh' }}>
    <div>
      <h2>Hospital List</h2>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            <h3>{hospital.name}</h3>
            <p><strong>Specialties:</strong> {hospital.specialties.join(', ')}</p>
            <p><strong>Consultation Number:</strong> {hospital.consultationNumber}</p>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required /><br />
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required /><br />
              <button type="submit">Book Appointment</button>
              <input type="hidden" name="hospital" value={hospital.name} />
            </form>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Hospitals;
