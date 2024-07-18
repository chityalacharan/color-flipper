
var button = document.getElementById("btn");
const colors =["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
var a,b,c,d,e,f;


function clickme(){
     a = Math.floor((Math.random()*10))
     b = Math.floor((Math.random()*10))
     c = Math.floor((Math.random()*10))
     d = Math.floor((Math.random()*10))
     e = Math.floor((Math.random()*10))
     f = Math.floor((Math.random()*10))   
    var color =  colors[a] + colors[b] + colors[c] + colors[d] +colors[e] +colors[f];
    document.body.style.backgroundColor = `#` + color;
    console.log(color)
}

//   button.addEventListener("click",()=>{
//     console.log("HEllo")
//   })





