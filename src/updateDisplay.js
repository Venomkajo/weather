import { getRadioButton } from "./radioButtons";
import { convertTime } from "./convertTime";

// update the entire display
export function updateDisplay(updateData) {
    // update current
    const currentWeatherImage = document.getElementById('weatherImage');
    const currentWeatherDisplay = document.getElementById('weatherDisplay');
    const currentWeatherTemperature = document.getElementById('weatherTemperature');
    const currentHumidity = document.getElementById('weatherHumidity');
    const currentPressure = document.getElementById('weatherPressure');

    currentWeatherImage.src = updateData.current.condition.icon;
    currentWeatherDisplay.innerText = updateData.current.condition.text;

    if (getRadioButton() === 'C'){
        currentWeatherTemperature.innerText = updateData.current.temp_c + 'C';
    } else {
        currentWeatherTemperature.innerText = updateData.current.temp_f + 'F';
    }

    currentHumidity.innerText = 'Humidity: ' + updateData.current.humidity;
    currentPressure.innerText = 'Pressure: ' + updateData.current.pressure_mb + ' mb';

    // update today
    const todayContainer = document.querySelector('#today24');
    update24(todayContainer, updateData, 0);
    // update tomorrow
    const tomorrowContainer = document.querySelector('#tomorrow24');
    update24(tomorrowContainer, updateData, 1);
    // update after tomorrow
    const afterTomorrowContainer = document.querySelector('#afterTomorrow24');
    update24(afterTomorrowContainer, updateData, 2);
}

function update24(containerDiv, data24, day){
    for (let i = 0; i < 24; i++){

        const currentHour = data24.forecast.forecastday[day].hour[i];

        const weatherGrid = document.createElement('div');
        weatherGrid.classList.add('weather-grid');
        
        const imgIcon = document.createElement('img');
        imgIcon.src = currentHour.condition.icon;
        weatherGrid.appendChild(imgIcon);

        const weatherContainer = document.createElement('div');
        weatherContainer.classList.add('weather-container');
        weatherGrid.appendChild(weatherContainer);

        const timeDisplayP = document.createElement('p');
        timeDisplayP.textContent = convertTime(currentHour.time);
        weatherContainer.appendChild(timeDisplayP);

        const weatherDisplayP = document.createElement('p');
        weatherDisplayP.innerText = currentHour.condition.text;
        weatherContainer.appendChild(weatherDisplayP);

        const weatherTemperatureP = document.createElement('p');
        if (getRadioButton() === 'C')
        {
            weatherTemperatureP.innerText = currentHour.temp_c + 'C';
        } else {
            weatherTemperatureP.innerText = currentHour.temp_f + 'F';
        }
        weatherContainer.appendChild(weatherTemperatureP);

        containerDiv.appendChild(weatherGrid);
    }
}