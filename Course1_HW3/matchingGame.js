
var theLeftSide = document.getElementById("leftSide");
var numberOfFaces = 5;

function generaeFaces(){
    for (var i = 0 ; i<numberOfFaces; i++){
        var newNode = document.createElement("img src");
        var imgPart = document.getElementById("leftSide");
        imgPart.appendChild(newNode)
    }
}