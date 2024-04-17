// get current radio button
export function getRadioButton(){
    const radioButtons = document.querySelectorAll('input[name="unit"]');
    for (const button of radioButtons){
        if (button.checked){
            return button.value;
        }
    }
    
    return null;
}
