document.body.style.margin = "0px";
var canvasdiv = document.getElementById("canvasdiv");
canvasdiv.style.border = "5px solid black";
canvasdiv.style.width = "fit-content";
canvasdiv.style.height = "fit-content";

WebTurtle.Renderer.Insert(canvasdiv);
WebTurtle.Renderer.SetSize((window.innerWidth / 2), (window.innerHeight / 2));

canvasdiv.style.marginTop = ((window.innerHeight / 2) - (canvasdiv.offsetHeight / 2) + "px")

var obj = WebTurtle.Object.createObject("test", "Rectangle", "red", 0, 0, (window.innerWidth / 5), (window.innerWidth / 5));
WebTurtle.Object.addObject(obj);

var rotation = 0;
setInterval(function(){
    WebTurtle.Object.removeObject("test2")
    var obj2 = WebTurtle.Object.createObject("test2", "Rectangle", "blue", (window.innerWidth / 6), (window.innerHeight / 4.5), (window.innerWidth / 5), (window.innerWidth / 5), rotation);
    WebTurtle.Object.addObject(obj2);
    rotation += 1;
}, 15);

setInterval(WebTurtle.Renderer.Render, 1);