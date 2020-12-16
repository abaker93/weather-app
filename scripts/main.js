const time = document.getElementById('time');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const temp = document.getElementById('temp');
const loc = document.getElementById('loc');

const background = document.getElementById('background');

async function getWeather(location) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=4f5324396d378315d2b0a7feb08916cc', {mode: 'cors'});
    const weatherData = await response.json();

    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weatherDate = new Date(utc + (1000 * weatherData.timezone));
    let weatherHour = weatherDate.getHours();
    if (weatherHour == 0) { weatherHour = 12 }
    if (weatherHour > 12) { weatherHour = weatherHour - 12 }
    if (weatherHour < 10) { weatherHour = '0' + weatherHour }
    let weatherMinute = weatherDate.getMinutes();
    if (weatherMinute < 10) { weatherMinute = '0' + weatherMinute }
    const weatherMonth = monthNames[weatherDate.getMonth()];
    const weatherDay = weatherDate.getDate();
    time.innerHTML = weatherHour + ':' + weatherMinute;
    date.innerHTML = weatherMonth + ' ' + weatherDay;

    let timeColor;

    if (weatherDate.getHours() >= 0 && weatherDate.getHours() < 3) {
        timeColor = '#30153D'
    } else if (weatherDate.getHours() >= 3 && weatherDate.getHours() < 6) {
        timeColor = '#0E1844'
    } else if (weatherDate.getHours() >= 6 && weatherDate.getHours() < 9) {
        timeColor = '#67AFC9'
    } else if (weatherDate.getHours() >= 9 && weatherDate.getHours() < 12) {
        timeColor = '#94D6DC'
    } else if (weatherDate.getHours() >= 12 && weatherDate.getHours() < 15) {
        timeColor = '#FBDC76'
    } else if (weatherDate.getHours() >= 15 && weatherDate.getHours() < 18) {
        timeColor = '#F99729'
    } else if (weatherDate.getHours() >= 18 && weatherDate.getHours() < 21) {
        timeColor = '#BB4E2B'
    } else if (weatherDate.getHours() >= 21 && weatherDate.getHours() < 24) {
        timeColor = '#7C052D'
    }

    const weatherDesc = weatherData.weather[0].main;
    desc.innerHTML = weatherDesc;

    const weatherTemp = weatherData.main.temp;
    const weatherTempCelcius = Math.round(weatherTemp - 273.15)
    const weatherTempFahrenheit = Math.round((weatherTemp - 273.15) * (9 / 5) + 32)
    temp.innerHTML = weatherTempFahrenheit + ' &deg;F';

    let tempColor;

    if (weatherTemp < 240) {
        tempColor = '#1D0D55'
    } else if (weatherTemp >= 240 && weatherTemp < 245) {
        tempColor = '#1B2267'
    } else if (weatherTemp >= 245 && weatherTemp < 250) {
        tempColor = '#183779'
    } else if (weatherTemp >= 250 && weatherTemp < 255) {
        tempColor = '#12619D'
    } else if (weatherTemp >= 255 && weatherTemp < 260) {
        tempColor = '#0C8BC1'
    } else if (weatherTemp >= 260 && weatherTemp < 265) {
        tempColor = '#06B5E5'
    } else if (weatherTemp >= 265 && weatherTemp < 270) {
        tempColor = '#45C8EC'
    } else if (weatherTemp >= 270 && weatherTemp < 275) {
        tempColor = '#83DAF2'
    } else if (weatherTemp >= 275 && weatherTemp < 280) {
        tempColor = '#C1EDF9'
    } else if (weatherTemp >= 280 && weatherTemp < 285) {
        tempColor = '#E0F6FC'
    } else if (weatherTemp >= 285 && weatherTemp < 290) {
        tempColor = '#FFF4D0'
    } else if (weatherTemp >= 290 && weatherTemp < 300) {
        tempColor = '#FFE8A1'
    } else if (weatherTemp >= 300 && weatherTemp < 305) {
        tempColor = '#FFD042'
    } else if (weatherTemp >= 305 && weatherTemp < 310) {
        tempColor = '#F4A13A'
    } else if (weatherTemp >= 310 && weatherTemp < 315) {
        tempColor = '#E87131'
    } else if (weatherTemp >= 315 && weatherTemp < 320) {
        tempColor = '#D45532'
    } else if (weatherTemp >= 320 && weatherTemp < 325) {
        tempColor = '#BF3932'
    } else if (weatherTemp >= 325 && weatherTemp < 330) {
        tempColor = '#AB1D32'
    } else if (weatherTemp >= 330 && weatherTemp < 335) {
        tempColor = '#A10F32'
    } else if (weatherTemp > 340) {
        tempColor = '#960032'
    }

    loc.innerHTML = weatherData.name;

    background.style.background = `linear-gradient(${timeColor} 0%, ${tempColor} 100%)`
}

getWeather('erie');

const searchCity = () => {
    const search = document.getElementById('search')
    const newCity = search.value;

    getWeather(newCity);
    
    search.value = '';
}