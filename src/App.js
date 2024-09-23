
// import './App.css';
// import React, { useEffect } from 'react';
// import { useState } from 'react';

// function App() {

//   const curdate = new Date();
//   const months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const month = months[curdate.getMonth()];
//   const day = curdate.getDate();
//   const year = curdate.getFullYear();
//   const formatted_date = `${month} ${day} ,${year}`




//   const [city, setCity] = useState("banglore");
//   const [weatherdata, setWeatherData] = useState(null);


//   const apiKey = '48ce6d5d2ada0a377fe5a75aae7d43f2';


//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

//       const data = await response.json();
//       console.log(data);
//       setWeatherData(data);

//     }
//     catch (error) {
//       console.log("Error fetching weather data: ", error);
//     }


//   };

//   useEffect(() => {
//     fetchWeatherData();
//   }, [])



//   const handleInputChange = (event) => {
//     console.log(event.target.value);
//     setCity(event.target.value);
//   };



//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeatherData();
//   };


//   const getWeatherIconUrl = (main) => {
//     switch (main) {
//       case "Clear":
//         return "/sun.png"; // Path to your sunny weather icon
//       case "Rain":
//         return "/icons/rainy.png"; // Path to your rainy weather icon
//       case "Snow":
//         return "/icons/snowy.png"; // Path to your snowy weather icon
//       case "Haze":
//         return "/sun.png"; // Path to your haze weather icon
//       // Add more cases for other weather conditions as needed
//       default:
//         return null;
//     }
//   };


//   return (
//     <div className="App">
//       <div className='container'>
//         {
//           weatherdata && (
//             <>

//               <h1 className='container_date'>{formatted_date}</h1>
//               <div className='weather_data'>
//                 <h2 className='container_city'>{weatherdata.name}</h2>
//                 <img className="container_img" src={getWeatherIconUrl(weatherdata.weather[0].main)} width="180px" alt="Weather Icon" />
//                 <h2 className='container_degree'>{weatherdata.main.temp}</h2>
//                 <h2 className='country_per'>{weatherdata.weather[0].main}</h2>
//                 <form className='form' onSubmit={handleSubmit}>

//                   <input type="text" className='input' placeholder="enter city" onChange={handleInputChange} required />
//                   <button type='submit'>Search</button>
//                 </form>
//               </div>
//             </>

//           )}
//       </div>
//     </div>

//   );
// }

// export default App;



import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;


  const apiKey = "bcda10ba323e88e96cb486015a104d1d";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      case "Snow":
        return "/snow.png";
      case "heavy-rain":
        return "/heavy-rain";
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="container">
        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              {/* <img className="container_img" src="/thunder.png" width="180px" alt="sss"/> */}
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                width="180px"
                alt="Weather Icon"
              />
              <h2 className="container_degree">{weatherData.main.temp}</h2>
              <h2 className="country_per">  {weatherData.weather[0].main} </h2>

              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter city name"
                  value={city}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default App;
