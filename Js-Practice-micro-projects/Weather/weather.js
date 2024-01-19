const keyAPI = "";
const openLink = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const input = document.querySelector("#section1 input")


async function weather(location){
const response = await fetch(openLink + `&appid=${keyAPI}&q=${location}`);
var details = await response.json();


var place = details.name + ", " + details.sys.country
var wspeed = details.wind.speed
var description = details.weather[0].description
// Define your object array with images for different weather conditions
const weatherImages = [
  { condition: 'Clouds', src: 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png', label: 'Cloudy' },
  { condition: 'Rain', src: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_6-512.png', label: 'Rainy' },
  { condition: 'Clear', src: 'https://cdn1.iconfinder.com/data/icons/weather-732/64/CLEAR_SKY-morning-climate-season-temperature-64.png', label: 'Clear Sky' },
  { condition: 'Smoke', src: 'https://cdn1.iconfinder.com/data/icons/world-pollution-3/512/air-pollutiom-dust-smoke-pm2.5-environment-512.png', label: 'Smoke' },
  {condition: 'Snow', src: 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Light_Snow-512.png', label:'Light Snow'},
 {condition: 'Fog', src: 'https://cdn3.iconfinder.com/data/icons/meteocons/512/fog-symbol-512.png', label:'Foggy'}, 
 // Add more conditions and corresponding image sources as needed
];

// Get the label and image source based on the weather condition
const wmain = details.weather[0].main;
const weatherObject = weatherImages.find(item => item.condition === wmain);

// Update the image source and log the label
if (weatherObject) {
  document.querySelector("#upper img").src = weatherObject.src;
  console.log(weatherObject.label);
} else {
  console.log("Unknown weather condition");
}



var humidity = details.main.humidity
if(humidity < 30){
hum = humidity + "% , Low Humidity"
}
else if(humidity > 30 && humidity < 60){
hum = humidity + "% , Humidity Balanced"
}
else{
  hum = humidity + "% , High Humidity"
}
console.log(details)
document.querySelector("#upper h2").innerHTML = Math.round(details.main.temp) + " °C "
document.querySelector("#upper span").innerHTML = description 

document.querySelector("#leftS h3").innerHTML =  hum
document.querySelector("#rightS h3").innerHTML = ` ${place} \n Windspeed: ${wspeed} km/hr  \n  ${wmain}`

}

document.querySelector("#section1 button").addEventListener("click", ()=> {
  weather(input.value)
} )

