//Function.js
//

var WebTurtle = {
    Object: {
        addObject: function(Object){
            if (Object == null){
                console.error("[WebTurtle/Error] Object is null.");
                console.error("[WebTurtle/Error] Stack trace: ");
                console.error("[WebTurtle/Error] No stack trace available.");
            }
            else{
                if (Object.type === "Rectangle"){
                    //Draw rotated rectangle
                    var topush = [`Context.fillStyle = "${Object.color}";
                    Context.save();
                    Context.translate((${Object.pos.x} + ${(Object.size.width / 2)}), (${Object.pos.y} + ${(Object.size.height / 2)}));
                    Context.rotate((Math.PI / 180) * ${Object.rotation});
                    Context.translate(-(${Object.pos.x} + ${(Object.size.width / 2)}), -(${Object.pos.y} + ${(Object.size.height / 2)}));
                    Context.fillRect(${Object.pos.x}, ${Object.pos.y}, ${Object.size.width}, ${Object.size.height});
                    Context.restore();
                    `, Object.id];
                    WebTurtle.System.toexe.push(topush);
                }
            }
        },
        removeObject: function(Id){
            if (Id == null){
                console.error("[WebTurtle/Error] Id is null.");
                console.error("[WebTurtle/Error] Stack trace: ");
                console.error("[WebTurtle/Error] No stack trace available.");
            }
            else{
                var index = 0;
                while (index < WebTurtle.System.toexe.length){
                    if (WebTurtle.System.toexe[index][1] === Id){
                        WebTurtle.System.toexe.splice(index, 1);
                    }
                    index += 1;
                }
            }
        },
        createObject: function(Id, Type, Color, x, y, width, height, rotation){
            if (Type == null){
                console.error("[WebTurtle/Error] Type is null.");
                console.error("[WebTurtle/Error] Stack trace: ");
                console.error("[WebTurtle/Error] No stack trace available.");
            }
            else{
                var result = {
                    id: null,
                    rotation: null,
                    type: null,
                    color: null,
                    pos: {
                        x: null,
                        y: null
                    },
                    size: {
                        width: null,
                        height: null
                    }
                }
                if (Id == null){
                    console.error("[WebTurtle/Error] Id is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.id = Id;
                }
                if (rotation == null){
                    rotation = 0;
                }
                result.rotation = rotation;
                if (Type === "Rectangle"){
                    result.type = "Rectangle";
                }
                else{
                    console.error("[WebTurtle/Error] '" + Type +"' is not a valid type.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                if (Color == null){
                    console.error("[WebTurtle/Error] Color is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.color = Color;
                }
                if (x == null){
                    console.error("[WebTurtle/Error] x is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.pos.x = x;
                }
                if (y == null){
                    console.error("[WebTurtle/Error] y is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.pos.y = y;
                }
                if (width == null){
                    console.error("[WebTurtle/Error] width is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.size.width = width;
                }
                if (height == null){
                    console.error("[WebTurtle/Error] height is null.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
                else{
                    result.size.height = height;
                }
                return result;
            }
        }
    },
    Renderer: {
        Insert: function(ChildOf){
            if (ChildOf == null) {
                ChildOf = document.body;
            }
            try{
               ChildOf.innerHTML += "<canvas id='webturtle' width='" + (window.innerWidth / 2) + "' height='" + (window.innerHeight / 2) + "'></canvas>";
            }
            catch(error){
                console.error("[WebTurtle/Error] An error has occured while trying to insert the renderer.");
                console.error("[WebTurtle/Error] Stack trace: ");
                console.error("[WebTurtle/Error] " + error);
            }
        },
        SetSize: function(Width, Height){
            if (Width.IsNan){
                if (Width == "fullscreen"){
                    Width = window.innerWidth;
                }
                else{
                    console.error("[WebTurtle/Error] Width is not a number.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
            }
            if (Height.IsNan){
                if (Height == "fullscreen"){
                    Height = window.innerHeight;
                }
                else{
                    console.error("[WebTurtle/Error] Height is not a number.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] No stack trace available.");
                }
            }
            var Renderer = document.getElementById("webturtle");
            Renderer.width = Width;
            Renderer.height = Height;
        },
        Render: function(){
            var Renderer = document.getElementById("webturtle");
            var Context = Renderer.getContext("2d");
            Context.clearRect(0, 0, Renderer.width, Renderer.height);
            var index = 0;
            while (index < WebTurtle.System.toexe.length){
                try{
                    eval(WebTurtle.System.toexe[index][0]);
                }
                catch(error){
                    console.error("[WebTurtle/Error] An error has occured while trying to render an object.");
                    console.error("[WebTurtle/Error] Stack trace: ");
                    console.error("[WebTurtle/Error] " + error);
                }
                index += 1;
            }
        }
    },
    System: {
        toexe: []
    }
}