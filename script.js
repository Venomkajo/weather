// weather API 61fe5866c8534094a4804224241604

let data = '';
let input = 'wroclaw';

startApi();

async function startApi(){
    data = await getApi(input);
    updateDisplay(data);
}

async function getApi(apiInput){
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=' + apiInput + '&days=3&aqi=no&alerts=no', {mode: "cors"});
    const apiData = await response.json();
    return apiData;
}

function updateDisplay(updateData) {
    // update current
    const weatherImage = document.getElementById('weatherImage');
    const weatherDisplay = document.getElementById('weatherDisplay');
    const weatherTemperature = document.getElementById('weatherTemperature');

    weatherImage.src = updateData.current.condition.icon;
    weatherDisplay.innerText = updateData.current.condition.text;
    weatherTemperature.innerText = updateData.current.temp_c + 'C';
}

console.log('loading complete');