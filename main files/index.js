var d1=Math.floor(Math.random()*6)+1; //random no

var d2=Math.floor(Math.random()*6)+1;

var imgadd="images/dice"+d1+".png"; //random img file
var imgadd2="images/dice"+d2 + ".png";

var img1=document.querySelectorAll("img")[0]; //selecting img tag
var img2=document.querySelectorAll("img")[1];


img1.setAttribute("src",imgadd);//choosing src attribute and modyfying it
img2.setAttribute("src",imgadd2);

if(d1==d2){
document.querySelector("h1").innerText="draw"

}
else if(d1>d2){
document.querySelector("h1").innerText="player 1 won"
}
else{
    document.querySelector("h1").innerText="player 2 won"
}