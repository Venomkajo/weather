// update the entire display
export function updateDisplay(updateData) {
    // update current
    const currentWeatherImage = document.getElementById('weatherImage');
    const currentWeatherDisplay = document.getElementById('weatherDisplay');
    const currentWeatherTemperature = document.getElementById('weatherTemperature');

    currentWeatherImage.src = updateData.current.condition.icon;
    currentWeatherDisplay.innerText = updateData.current.condition.text;
    currentWeatherTemperature.innerText = updateData.current.temp_c + 'C';

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