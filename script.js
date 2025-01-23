
//Making variables

const inputBox = document.getElementById('input-box');
const searchBtn= document.getElementById('search-btn');
const weather_img = document.getElementById('weather-img');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.getElementById('location-nil');


let baseUrl="https://api.openweathermap.org/data/2.5/weather"

 async function checkWeather(city){
    const api_key = '79d868e802d08c83534f79e8a0f69ca0';
    const apiUrl = `${baseUrl}?q=${city}&appid=${api_key}`;
    
   try{
    const weather_data = await fetch (`${apiUrl}`).then(response => response.json());
       
    
    const celsius = `${Math.round(weather_data.main.temp-273)}`;
    
     const fahrenheit = `${Math.round(weather_data.main.temp - 273.15) * 9/5 + 32}`;

     // Display both temperatures
    
    temperature.innerHTML = `${celsius}°C / ${fahrenheit}°F`;  

    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML= `${weather_data.main.humidity} %`;
    wind_speed.innerHTML= `${weather_data.wind.speed}10Km/H`;
  

    if (weather_data.weather && weather_data.weather.length > 0) {

        const weatherMain = weather_data.weather[0].main;

        if (weatherMain === 'Clear') {
            weather_img.src = './images/clear.png';
            
          } else if (weatherMain === 'Rain') {
            weather_img.src = './images/rain.png';

          } else if (weatherMain === 'Clouds') {
            weather_img.src = './images/clouds.png';

          } else if (weatherMain === 'Snow') {
            weather_img.src = './images/snow.png';
         } 
         
        }
   }catch(error){
      console.log("apierror", error);
   }
   
    
      }
          
          
 
      
     searchBtn.addEventListener('click', function(){
    checkWeather(inputBox.value);
    });