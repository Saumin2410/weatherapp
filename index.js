const apikey="2bcd19270390fa91b9a6ad2d9f738fd1";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(){
const searchvalue =document.getElementById("searchvalue").value;
const response = await fetch(apiurl+searchvalue+`&appid=${apikey}`);
if (!response.ok) {
alert("Enter a correct City name");
document.getElementById("searchvalue").value="";
}
else{
let data=await response.json();
console.log(data);
let weatherimage=data.weather[0].main.toLowerCase();
let description=data.weather[0].description.toLowerCase();
document.getElementById("weatherimage").src=`images/${weatherimage}.png`;
document.getElementById("description").textContent = description;
console.log(weatherimage);
document.getElementById("city").textContent = data.name;
let tempvalue=data.main.temp;
document.getElementById("tempvalue").textContent =Math.round(tempvalue)+"°c";
document.getElementById("highesttemp").textContent =Math.round(data.main.temp_max)+"°c";
document.getElementById("lowesttemp").textContent =Math.round(data.main.temp_min)+"°c";
document.getElementById("humidityvalue").textContent = data.main.humidity;
let windspeedvalue=data.wind.speed
document.getElementById("windspeedvalue").textContent = Math.round(windspeedvalue*10)/10;
document.getElementById("searchvalue").value="";
} 
}
