// weather API 61fe5866c8534094a4804224241604
// https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=Wroclaw&days=3&aqi=no&alerts=no

let data = '';
let input = 'wroclaw';

startApi();

document.getElementById('locationForm').addEventListener('submit', function(event){
    event.preventDefault();

    if (input){
        input = document.getElementById('locationInput').value;
        clearDisplay();
        startApi();
    }
})

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
    const todayContainer = document.querySelector('#today24');
    update24(todayContainer, data, 0);
    // update tomorrow
    const tomorrowContainer = document.querySelector('#tomorrow24');
    update24(tomorrowContainer, data, 1);
    // update after tomorrow
    const afterTomorrowContainer = document.querySelector('#afterTomorrow24');
    update24(afterTomorrowContainer, data, 2);

}

function update24(containerDiv, data24, day){
    for (let i = 0; i < 24; i++){

        currentHour = data24.forecast.forecastday[day].hour[i];

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

        containerDiv.appendChild(weatherGrid);
    }
}

function clearDisplay(){
    const todayContainer = document.querySelector('#today24');
    const tomorrowContainer = document.querySelector('#tomorrow24');
    const afterTomorrowContainer = document.querySelector('#afterTomorrow24');

    while (todayContainer.firstChild){
        todayContainer.removeChild(todayContainer.firstChild);
    }
    while (tomorrowContainer.firstChild){
        tomorrowContainer.removeChild(tomorrowContainer.firstChild);
    }
    while (afterTomorrowContainer.firstChild){
        afterTomorrowContainer.removeChild(afterTomorrowContainer.firstChild);
    }
}

console.log('loading complete');