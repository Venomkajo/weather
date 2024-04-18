// weather API 61fe5866c8534094a4804224241604
// https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=London&days=3&aqi=no&alerts=no

import './styles.css';
import { updateDisplay } from './updateDisplay';
import { clearDisplay } from './clearDisplay';

let data = '';
let input = 'London';

updateApi();

const radioButtons = document.querySelectorAll('input[name="unit"]');
radioButtons.forEach(button => {
    button.addEventListener('click', function(){
        clearDisplay();
        updateApi();
    })
})

document.getElementById('locationForm').addEventListener('submit', function(event){
    event.preventDefault();

    if (input){
        input = document.getElementById('locationInput').value;
        clearDisplay();
        updateApi();
    }
})

// saves api response to data using await
async function updateApi(){
    data = await getApi(input);
    if (data){
        updateDisplay(data);
    } else {
        alert("API Error");
    }
}

// get api
async function getApi(apiInput){
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=61fe5866c8534094a4804224241604&q=' + apiInput + '&days=3&aqi=no&alerts=no', {mode: "cors"});
    const apiData = await response.json();
    return apiData;
}

console.log('loading complete');