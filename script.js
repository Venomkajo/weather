// weather API 61fe5866c8534094a4804224241604
// https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=Wroclaw&days=3&aqi=no&alerts=no

let data = '';
let input = 'wroclaw';

startApi();

// saves api response to data using await
async function startApi(){
    data = await getApi(input);
    updateDisplay(data);
}

// get api
async function getApi(apiInput){
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=' + apiInput + '&days=3&aqi=no&alerts=no', {mode: "cors"});
    const apiData = await response.json();
    return apiData;
}

// update the entire display
function updateDisplay(updateData) {
    // update current
    const currentWeatherImage = document.getElementById('weatherImage');
    const currentWeatherDisplay = document.getElementById('weatherDisplay');
    const currentWeatherTemperature = document.getElementById('weatherTemperature');

    currentWeatherImage.src = updateData.current.condition.icon;
    currentWeatherDisplay.innerText = updateData.current.condition.text;
    currentWeatherTemperature.innerText = updateData.current.temp_c + 'C';

    // update today
    const todayContainer = document.querySelector('.today24');
    for (let i = 0; i < 24; i++){

        currentHour = updateData.forecast.forecastday[0].hour[i];

        const weatherGrid = document.createElement('div');
        weatherGrid.classList.add('weather-grid');
        
        const imgIcon = document.createElement('img');
        imgIcon.src = currentHour.condition.icon;
        weatherGrid.appendChild(imgIcon);

        const weatherContainer = document.createElement('div');
        weatherContainer.classList.add('weather-container');
        weatherGrid.appendChild(weatherContainer);

        const timeDisplayP = document.createElement('p');
        timeDisplayP.textContent = currentHour.time;
        weatherContainer.appendChild(timeDisplayP);

        const weatherDisplayP = document.createElement('p');
        weatherDisplayP.innerText = currentHour.condition.text;
        weatherContainer.appendChild(weatherDisplayP);

        const weatherTemperatureP = document.createElement('p');
        weatherTemperatureP.innerText = currentHour.temp_c + 'C';
        weatherContainer.appendChild(weatherTemperatureP);

        todayContainer.appendChild(weatherGrid);
    }
}

console.log('loading complete');