import React, { useState } from 'react';
import image from './kk.jpg';

function EducationInstitutions() {
  const [formData, setFormData] = useState({ institution: '', admissionType: '', name: '', email: '', phone: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in ${formData.institution}! Your admission type is ${formData.admissionType}. We will contact you soon.`);
    setFormData({ institution: '', admissionType: '', name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const educationInstitutions = [
    { name: "St Marry High School", address: "Gandhinagar Main Street, Vijayawada.", admissionTypes: ["Online", "In-person"], url: "https://stmaryenglishmediumschoolsamtoli.com/" },
    { name: "Siddartha Junior College", address: "Benz circle, Vijayawada.", admissionTypes: ["Online", "In-person"], url: "https://www.smcvja.in/" },
    { name: "KL University", address: "Green fields, Guntur.", admissionTypes: ["Online", "In-person"], url: "https://www.kluniversity.in/" }
    // Add more institutions as needed
  ];

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '10vh' }}>
      <div>
        <h2>Best Education Institutions</h2>
        <ul>
          {educationInstitutions.map((institution, index) => (
            <li key={index}>
              <h3><a href={institution.url} target="_blank" rel="noopener noreferrer">{institution.name}</a></h3>
              <p><strong>Address:</strong> {institution.address}</p>
              <p><strong>Admission Types:</strong> {institution.admissionTypes.join(', ')}</p>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="admissionType">Admission Type:</label>
                <select id="admissionType" name="admissionType" onChange={handleInputChange} value={formData.admissionType} required>
                  <option value="">Select</option>
                  {institution.admissionTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select><br />
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required /><br />
                <button type="submit">Apply Online</button>
                <input type="hidden" name="institution" value={institution.name} />
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EducationInstitutions;
