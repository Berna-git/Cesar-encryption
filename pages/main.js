// get Elements 
const btnComparation = document.getElementById('worlds-comparacion');

// Add Listeners 
btnComparation.addEventListener('click', comparation)

// funciotiones of convert array and sort 
function convertArrayAndOrder(strToConvert) {
    strToConvert = strToConvert.toLowerCase();
    const convertWorld_arr = strToConvert.split('');
    const worldOrderArr = convertWorld_arr.sort();
    const world_OrderStr = worldOrderArr.join(',')
    return world_OrderStr;
}


function comparation() {
    const comparationWorld_one = document.getElementById('entrada-world-one').value;
    const comparationWorld_two = document.getElementById('entrada-world-two').value;
    const world_one_str_order = convertArrayAndOrder(comparationWorld_one);
    const world_two_str_order = convertArrayAndOrder(comparationWorld_two);
    if ( world_one_str_order == world_two_str_order) {
        console.log("Es un anagrama")
    } else {
        console.log('Anagrama no es')
    }
}
