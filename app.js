var btnTranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTransationURL(text) {
    console.log(serverURL+"?"+"text="+text);
    return serverURL+"?"+"text="+text
}

function clickHandler() {
    var inputText=txtInput.value;

    fetch(getTransationURL(inputText))
    .then(response => response.json())
    .then(json =>outputDiv.innerText=json.contents.translation)
}

btnTranslate.addEventListener("click",clickHandler);

