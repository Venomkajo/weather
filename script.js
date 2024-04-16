// weather API 61fe5866c8534094a4804224241604

async function updateDisplay(){
    // update today
    const weatherImage = document.getElementById('weatherImage');
    const weatherDisplay = document.getElementById('weatherDisplay');
    const weatherTemperature = document.getElementById('weatherTemperature');

    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=London&days=3&aqi=no&alerts=no', {mode: "cors"});
    const data = await response.json();
    weatherImage.src = data.current.condition.icon;
    weatherDisplay.innerText = data.current.condition.text;
    weatherTemperature.innerText = data.current.temp_c;
}

updateDisplay();

console.log('loading complete');