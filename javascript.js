var numSquare = 6;
var colors = randomFunctionGenrator(numSquare);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedcolor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
 var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
easyBtn.addEventListener("click" ,function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare =3;
    colors =randomFunctionGenrator(numSquare);
    pickedcolor = pickedColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++){
     if(colors[i]){
        squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        }
})
hardBtn.addEventListener("click" ,function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare =6;
    colors =randomFunctionGenrator(numSquare);
    pickedcolor = pickedColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        
        }
})


reset.addEventListener("click", function(){
 colors = randomFunctionGenrator(numSquare);
    pickedcolor = pickedColor();
    colorDisplay.textContent = pickedcolor;
      reset.textContent = "New Color";
       messageDisplay.textContent=" ";
    for( var j=0;j<squares.length;j++)
        {
            squares[j].style.background = colors[j];
        }
     h1.style.background = "steelblue"; 
})
for(var i=0; i<squares.length;i++)
    {
        //add intial color to squares
        squares[i].style.background= colors[i];
        //add click listner to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
         var clickedColor = this.style.background;
          //compare color to pickedcolor
            if(clickedColor===pickedcolor)
                {
                   changeColor(clickedColor);
                   h1.style.background = pickedcolor; messageDisplay.textContent="correct";
                    reset.textContent = "PLAY AGAIN?";
                  
                    
                }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent="try again";
                
            }
        })
    }
function changeColor(color) {
    for(i=0;i<squares.length;i++)
        {
            squares[i].style.background = color;
            
        }
}
function  pickedColor(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random];
    
}


function randomFunctionGenrator(num) {
    
    var arr = [];
    for(var j=0;j<num;j++)
        {
            arr.push(randomColor());
        }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g +  ", " + b + ")";
}