const time = document.getElementById('time');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const temp = document.getElementById('temp');
const loc = document.getElementById('loc');

async function getWeather(location) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=4f5324396d378315d2b0a7feb08916cc', {mode: 'cors'});
    const weatherData = await response.json();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weatherDate = new Date(weatherData.dt * 1000);
    const weatherHours = weatherDate.getHours();
    const weatherMinutes = weatherDate.getMinutes();
    const weatherMonth = monthNames[weatherDate.getMonth()];
    const weatherDay = weatherDate.getDate();
    time.innerHTML = weatherHours + ':' + weatherMinutes;
    date.innerHTML = weatherMonth + ' ' + weatherDay;

    const weatherDesc = weatherData.weather[0].main;
    desc.innerHTML = weatherDesc;

    const weatherTempCelcius = Math.round(weatherData.main.temp - 273.15)
    const weatherTempFahrenheit = Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32)
    temp.innerHTML = weatherTempFahrenheit + ' &deg;F';

    loc.innerHTML = weatherData.name;
}

getWeather('london');