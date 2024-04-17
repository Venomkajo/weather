// weather API 61fe5866c8534094a4804224241604
// https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=Wroclaw&days=3&aqi=no&alerts=no

import './styles.css';
import { updateDisplay } from './updateDisplay';
import { clearDisplay } from './clearDisplay';

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

console.log('loading complete');