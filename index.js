//Traigo datos!
const butonConversor = document.querySelector('#btn-conver');
const devolution_msj = document.querySelector('#section-devolution_msj')
//Traigo botnes para cifrar y desifrar
const btnCifrarMsj = document.querySelector("#btn-cifrar_msj");
const btnDesifrarMsj = document.querySelector("#btn-desifrar_msj");
//Agrego evento al botones
butonConversor.addEventListener("click", converText);
btnCifrarMsj.addEventListener("click", activeCifrado);
btnDesifrarMsj.addEventListener("click", activeDesifrado); 


//abecedario
const abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const otherSimbols = ["1","2","3","4","5","6","7","8","9","0",",","."," "];
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
//
//Encriptar el mensaje
const encryptMessage = (textoToConverso,ValueRot) => {
    let result= [];
    for (let i = 0; textoToConverso.length > i; i++ ){
        for(let j = 0; abecedario.length > j; j++){
            if(otherSimbols.includes(textoToConverso[i])) {
                result.push(textoToConverso[i])
                console.log("no estoy tan al pedo");
                break;
            }else if(textoToConverso[i] === abecedario[j]){
                result.push(abecedario[j + ValueRot])
                break;
            }
        }
    } 
    // console.log(result);
    return result;

}
// const printMsj = () => {

// }
//Activar y Desactivar el cifradi

function activeDesifrado() {
    cifrado = false;
    console.log("boton desifrado");
    return cifrado;    
}
function activeCifrado () {
    cifrado = true;
    console.log("boton cifrado");
    return cifrado;
}

// Funcion para convertir
function converText() {
    // Traigo datos
    const takeDataValue = parseInt(getDataValue());
    const takeDataText = getDataText();
    // Convierto en array
    const arrayText = converToArray(takeDataText);
    console.log(arrayText);
    // Encripto msj y devuelvo array
    const encryptMsjArray = encryptMessage(arrayText,takeDataValue);
    // Convierto un array en string 
    let msjEcrypted = encryptMsjArray.join("")
    devolution_msj.innerHTML = msjEcrypted;    
    console.log(cifrado)
}
// encryptMessage();    




