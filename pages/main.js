// get Elements 
const btnComparation = document.getElementById('worlds-comparacion');
const divMSjResult = document.getElementById('msj-result');
// Add Listeners 
btnComparation.addEventListener('click', comparation)
// function of convert array and sort 
function convertArrayAndOrder(strToConvert) {
    strToConvert = strToConvert.toLowerCase();
    const convertWorld_arr = strToConvert.split('');
    const worldOrderArr = convertWorld_arr.sort();
    const world_OrderStr = worldOrderArr.join(',')
    return world_OrderStr;
}

// Comparation and return the msj for the user! 
function comparation() {
    const comparationWorld_one = document.getElementById('entrada-world-one').value;
    const comparationWorld_two = document.getElementById('entrada-world-two').value;
    const world_one_str_order = convertArrayAndOrder(comparationWorld_one);
    const world_two_str_order = convertArrayAndOrder(comparationWorld_two);
    divMSjResult.classList.remove("style-MsjRed")
    divMSjResult.classList.remove("style-Msjgreen")
    if ( world_one_str_order == world_two_str_order && world_one_str_order && world_two_str_order) {
        divMSjResult.classList.add("style-Msjgreen");
        divMSjResult.innerHTML = `<p>"${comparationWorld_two}" es Anagrama de "${comparationWorld_one}"</p>`        
    } else if (!world_one_str_order && !world_two_str_order) {
        divMSjResult.classList.add("style-MsjRed");
        divMSjResult.innerHTML = `<p>Alguna de las entradas estan vacias o las dos!</p>`        
    } else {
        divMSjResult.classList.add("style-MsjRed");
        divMSjResult.innerHTML = `<p>"${comparationWorld_two}" NO es Anagrama de "${comparationWorld_one}"</p>`        
    }
    
}
