var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl =  "https://api.funtranslations.com/translate/mandalorian.json";

function getTranslateUrl (text) {
 return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured".error)
    alert("Something wrong with server please try after some time")
}

 function clickHandler(){ 
var inputTxt = txtInput.value;

fetch(getTranslateUrl(inputTxt))
.then(response =>response.json())
.then(json => {
    outputDiv.innerText = json.contents.translated;
})
.catch(errorHandler);
 }

btnTranslate.addEventListener("click", clickHandler);
