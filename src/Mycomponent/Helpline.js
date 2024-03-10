import React, { useState } from 'react';
import image from './rk.jpg';


function Helpline() {
  const [userLocation, setUserLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleCall = (number) => {
    if (userLocation) {
      console.log('Calling', number, 'from location:', userLocation.latitude, userLocation.longitude);
      // Here you would typically make an API call to emergency services, passing the user's location
    } else {
      console.warn('User location not available. Cannot make emergency call.');
    }
  };

  const helplines = [
    { name: 'Police', number: '100' },
    { name: 'Fire Brigade', number: '101' },
    { name: 'Ambulance', number: '102' },
    { name: 'Emergency Disaster Management', number: '108' },
    { name: 'Women Helpline', number: '1091' },
    { name: 'Child Helpline', number: '1098' },
    { name: 'Senior Citizen Helpline', number: '1090' }

    // Add more helplines as needed
  ];

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <div>
      <h1>Emergency Helpline Numbers</h1>
      <button onClick={getLocation}>Get My Location</button>
      <ul>
        {helplines.map((helpline, index) => (
          <li key={index}>
            <strong>{helpline.name}:</strong> <a href={'tel:${helpline.number}'} onClick={() => handleCall(helpline.number)}>{helpline.number}</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Helpline;