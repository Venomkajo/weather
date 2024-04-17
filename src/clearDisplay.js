// clear 24 displays
export function clearDisplay(){
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