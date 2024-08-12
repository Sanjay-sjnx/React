import React from 'react';
const Car = ({ name, imageUrl, company }) => {
  return (
    <div>
      <h2>Car Information</h2>
      <p><strong>Car Name:</strong> {name}</p>
      <p><strong>Company:</strong> {company}</p>
      <img src={imageUrl} alt={name} style={{ width: '300px' }} />
    </div>
  );
};
const Location = ({ city }) => {
  return (
    <div>
      <h2>Location Information</h2>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};
const App = () => {
  const carData = {
    name: "Tesla Model S",
    imageUrl: "/https://tse2.mm.bing.net/th?id=OIP.FYFC6_99JviTwYTTyoby1AHaEh&pid=Api&P=0&h=180",
    company: "Tesla",
  };
  const locationData = {
    city: "Palo Alto",
  };
  return (
    <div>
      <h1>Car and Location Information</h1>
      <Car name={carData.name} imageUrl={carData.imageUrl} company={carData.company} />
      <Location city={locationData.city} />
    </div>
  );
};

export default App;
