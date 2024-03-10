import React, { useState } from 'react';
import image from './nk.jpg';
function Entertainment() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({ movie: '', theater: '', date: '', time: '', seats: 1 });

  const entertainmentData = [
    { id: 1, title: "Concert", description: "Live music performance by top artists." },
    { id: 2, title: "Movie Night", description: "Enjoy the latest blockbuster movies.", theaters: [
      { name: "Cineplex", movies: ["Avengers: Endgame", "Joker", "The Lion King"] },
      { name: "AMC Theatres", movies: ["Spider-Man: Far From Home", "Toy Story 4", "Frozen II"] },
      // Add more theaters with movies as needed
    ]}
    // Add more entertainment options as needed
  ];

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Your tickets for ${bookingInfo.movie} at ${bookingInfo.theater} on ${bookingInfo.date} at ${bookingInfo.time} have been booked for ${bookingInfo.seats} seats.`);
    setBookingInfo({ movie: '', theater: '', date: '', time: '', seats: 1 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '10vh' }}>
    <div>
      <h2>Entertainment Options</h2>
      <ul>
        {entertainmentData.map(entertainment => (
          <li key={entertainment.id}>
            <h3>{entertainment.title}</h3>
            <p>{entertainment.description}</p>
            {entertainment.theaters && (
              <div>
                <h4>Theaters</h4>
                <ul>
                  {entertainment.theaters.map((theater, index) => (
                    <li key={index}>
                      <h5>{theater.name}</h5>
                      <ul>
                        {theater.movies.map((movie, index) => (
                          <li key={index}>
                            <span>{movie}</span>
                            <button onClick={() => handleMovieSelection(movie)}>Book Tickets</button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div>
          <h3>Book Tickets for {selectedMovie}</h3>
          <form onSubmit={handleBookingSubmit}>
            <label htmlFor="theater">Select Theater:</label>
            <select id="theater" name="theater" onChange={handleInputChange} required>
              <option value="">Select</option>
              {entertainmentData[1].theaters.map((theater, index) => (
                <option key={index} value={theater.name}>{theater.name}</option>
              ))}
            </select><br />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={bookingInfo.date} onChange={handleInputChange} required /><br />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={bookingInfo.time} onChange={handleInputChange} required /><br />
            <label htmlFor="seats">Number of Seats:</label>
            <input type="number" id="seats" name="seats" value={bookingInfo.seats} min="1" onChange={handleInputChange} required /><br />
            <button type="submit">Book Tickets</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
}

export default Entertainment;
