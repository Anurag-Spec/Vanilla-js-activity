var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl =  "https://api.funtranslations.com/translate/minion.json";

function getTranslateUrl (text) {
 return serverUrl + "?" + "text=" + text
}

btnTranslate.addEventListener("click", function clickEventHandler(){

    // outputDiv.innerText = "aji " + txtInput.value
  
var inputTxt = txtInput.value;

function errorHandler(error){
    console.log("error occured".error)
}

fetch(getTranslateUrl(inputTxt))
.then(response =>response.json())
.then(json => console.log(json.contents.translated))
.catch(errorHandler);
})


