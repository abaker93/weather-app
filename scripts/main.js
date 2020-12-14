const time = document.getElementById('time');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const temp = document.getElementById('temp');
const loc = document.getElementById('loc');

const background = document.getElementById('background');

async function getWeather(location) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=4f5324396d378315d2b0a7feb08916cc', {mode: 'cors'});
    const weatherData = await response.json();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weatherDate = new Date(weatherData.dt * 1000);
    const weatherHour = weatherDate.getHours();
    const weatherMinute = weatherDate.getMinutes();
    const weatherMonth = monthNames[weatherDate.getMonth()];
    const weatherDay = weatherDate.getDate();
    time.innerHTML = weatherHour + ':' + weatherMinute;
    date.innerHTML = weatherMonth + ' ' + weatherDay;

    let timeColor;

    if (weatherHour >= 0 && weatherHour < 3) {
        console.log(weatherHour + ' #30153D')
        timeColor = '#30153D'
    } else if (weatherHour >= 3 && weatherHour < 6) {
        console.log(weatherHour + ' #0E1844')
        timeColor = '#0E1844'
    } else if (weatherHour >= 6 && weatherHour < 9) {
        console.log(weatherHour + ' #67AFC9')
        timeColor = '#67AFC9'
    } else if (weatherHour >= 9 && weatherHour < 12) {
        console.log(weatherHour + ' #94D6DC')
        timeColor = '#94D6DC'
    } else if (weatherHour >= 12 && weatherHour < 15) {
        console.log(weatherHour + ' #FBDC76')
        timeColor = '#FBDC76'
    } else if (weatherHour >= 15 && weatherHour < 18) {
        console.log(weatherHour + ' #F99729')
        timeColor = '#F99729'
    } else if (weatherHour >= 18 && weatherHour < 21) {
        console.log(weatherHour + ' #BB4E2B')
        timeColor = '#BB4E2B'
    } else if (weatherHour >= 21 && weatherHour < 24) {
        console.log(weatherHour + ' #7C052D')
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
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #06B5E5')
        tempColor = '#06B5E5'
    } else if (weatherTemp >= 240 && weatherTemp < 250) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #45C8EC')
        tempColor = '#45C8EC'
    } else if (weatherTemp >= 250 && weatherTemp < 260) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #83DAF2')
        tempColor = '#83DAF2'
    } else if (weatherTemp >= 260 && weatherTemp < 270) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #C1EDF9')
        tempColor = '#C1EDF9'
    } else if (weatherTemp >= 270 && weatherTemp < 280) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #E0F6FC')
        tempColor = '#E0F6FC'
    } else if (weatherTemp >= 280 && weatherTemp < 290) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #FFF4D0')
        tempColor = '#FFF4D0'
    } else if (weatherTemp >= 290 && weatherTemp < 300) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #FFE8A1')
        tempColor = '#FFE8A1'
    } else if (weatherTemp >= 300 && weatherTemp < 310) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #FFD042')
        tempColor = '#FFD042'
    } else if (weatherTemp >= 310 && weatherTemp < 320) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #F4A13A')
        tempColor = '#F4A13A'
    } else if (weatherTemp >= 320 && weatherTemp < 330) {
        console.log(weatherTemp + ' ' + weatherTempFahrenheit + ' #E87131')
        tempColor = '#E87131'
    }

    loc.innerHTML = weatherData.name;

    background.style.background = `linear-gradient(${timeColor} 0%, ${tempColor} 100%)`
}

getWeather('erie');

const searchCity = () => {
    const searchBar = document.getElementById('search');
    
}