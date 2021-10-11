//Traigo datos!
const butonConversor = document.querySelector('#btn-conver');
//Agrego evento al boton
butonConversor.addEventListener("click", converText);
// butonConversor.addEventListener("click", getDataValue);
// butonConversor.addEventListener("click", getDataText);

//array Prueba 
const abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const abcDesorder = ["z"," ","b","e","r","n","a"];
//Traigo Los datos del textarea y el Root
const getDataText = () => {
    const getText = document.querySelector('#section-textArea_value');
    const valueText = getText.value;
     return valueText;
}
const getDataValue = () => {
    const getRoot = document.querySelector('#selcionardor-root');
    const valueOfRoot = getRoot.value;
    return valueOfRoot;
}

//Convertir en array un string
const converToArray = (texto) => {
   let arrayText = Array.from(texto.toLowerCase());
    return arrayText; 
}

//Encriptar el mensaje
const encryptMessage = (textoConverso) => {
    // let result = []
    // for (item in abcDesorder ){
    //     result.push(abecedario[item ])
    //     console.log(result);
    // }
    let result= [];
    for (let i = 0; abcDesorder.length > i; i++ ){
        for(let j = 0; abecedario.length > j; j++){
            if(abcDesorder[i] === abecedario[j]){
                result.push(abecedario[j + 2])
                break;
            } else if(abcDesorder[i] == " ") {
                result.push(abcDesorder[i]);
                break;
            }
        }
    } 
    console.log(result);

}

// Funcion para convertir
function converText() {
    // dentro de esta funcion habra funciones
    //covierta el string en un array
    //pasar el el array y decodificar el msj
    // pasarlo a string
    const takeDataValue = getDataValue();
    const takeDataText = getDataText();
    // console.log(takeDataValue)
    // console.log(takeDataText)
    const arrayText = converToArray(takeDataText);
    encryptMessage();    
}
encryptMessage();    




