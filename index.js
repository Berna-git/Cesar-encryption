//Traigo datos!
const butonConversor = document.querySelector('#btn-conver');
const devolution_msj = document.querySelector('#section-devolution_msj')
//Agrego evento al boton
butonConversor.addEventListener("click", converText);

//abecedario
const abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

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
const encryptMessage = (textoToConverso,ValueRot) => {
    let result= [];
    for (let i = 0; textoToConverso.length > i; i++ ){
        for(let j = 0; abecedario.length > j; j++){
            if(textoToConverso[i] === abecedario[j]){
                result.push(abecedario[j + ValueRot])
                break;
            } else if(textoToConverso[i] == " ") {
                result.push(textoToConverso[i]);
                break;
            }
        }
    } 
    // console.log(result);
    return result;

}
// const printMsj = () => {

// }

// Funcion para convertir
function converText() {
    // Traigo datos
    const takeDataValue = parseInt(getDataValue());
    const takeDataText = getDataText();
    // Convierto en array
    const arrayText = converToArray(takeDataText);
    // Encripto msj y devuelvo array
    const encryptMsjArray = encryptMessage(arrayText,takeDataValue);
    // Convierto un array en string 
    let msjEcrypted = encryptMsjArray.join("")
    devolution_msj.innerHTML = msjEcrypted;    
    
}
// encryptMessage();    




