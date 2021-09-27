
var btntranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

function clickeventhandler(){

    outputdiv.innertext="hjkhk:" + txtinput.value;
};

btntranslate.addEventListener("click",clickeventhandler)

