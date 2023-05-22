//Get-Element
var colorPickerContainer=document.getElementById('colorPickerContainer');
var selectedColorHexCode=document.getElementById('selectedColorHexCode');



//button-Functions
function one(){
    colorPickerContainer.style.backgroundColor='#e0e0e0';
    selectedColorHexCode.textContent='#e0e0e0';
}

function two(){
    colorPickerContainer.style.backgroundColor='#6fcf97';
    selectedColorHexCode.textContent='#6fcf97';
}

function three(){
    colorPickerContainer.style.backgroundColor='#56cbf2';
    selectedColorHexCode.textContent='#56cbf2';
}

function four(){
    colorPickerContainer.style.backgroundColor='#bb6bd9';
    selectedColorHexCode.textContent='#bb6bd9';
}