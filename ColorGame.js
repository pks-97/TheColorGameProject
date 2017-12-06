var squareColor=[];
var btn=document.querySelector("button");
var msg=document.querySelector("#message");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
btn.textContent="New Colors";
var pickcolor;
easy.addEventListener("click",function(){
	btn.textContent="New Colors";
	easy.classList.add("selected");
	hard.classList.remove("selected");
f1();
})
hard.addEventListener("click",function(){
	squareColor.length=6;
	this.classList.add("selected");
	easy.classList.remove("selected");
f();
})
btn.addEventListener("click",function(){
f();
})
for(var t=0;t<6;t++)
{
	squareColor[t]=rs();
}
pickcolor=pc(squareColor,6);
var y=document.querySelector("#kl");
y.textContent=pickcolor;
var squares=document.getElementsByClassName("square");
for(var i=0;i<6;i++)
{
squares[i].style.backgroundColor=squareColor[i];
}
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function(){
		if(pickcolor!==this.style.backgroundColor)
		{
			this.style.backgroundColor="#232323";
			msg.textContent="Try Again";
		}
		else
		{
			msg.textContent="Correct";
			document.querySelector("h1").style.backgroundColor=this.style.backgroundColor;
			document.querySelector("button").textContent="Play Again?";
			for(var j=0;j<squareColor.length;j++)
			{
				squares[j].style.backgroundColor=this.style.backgroundColor;
			}
		}
	})
}
function pc(a,b){
var rand=Math.floor(Math.random()*(b));
return a[rand];
}
function rs()
{
	var rand1=Math.floor(Math.random()*256);
	var rand2=Math.floor(Math.random()*256);
	var rand3=Math.floor(Math.random()*256);
	var str;
	str="rgb("+rand1+", "+rand2+", "+rand3+")";
	return str;
}
function f(){
	btn.textContent="New Colors";
	msg.textContent="";
	for(var t=0;t<squareColor.length;t++)
{
	squareColor[t]=rs();
}
pickcolor=pc(squareColor,squareColor.length);
for(var i=0;i<squareColor.length;i++)
{
squares[i].style.backgroundColor=squareColor[i];
}
var y=document.querySelector("#kl");
y.textContent=pickcolor;
document.querySelector("h1").style.backgroundColor="steelblue";
}
function f1()
{msg.textContent=""
		for(var t=0;t<3;t++)
{
	squareColor[t]=rs();
}
squareColor.length=3;
	pickcolor=pc(squareColor,3);
	for(var i=0;i<6;i++){
		if(i<3)
		squares[i].style.backgroundColor=squareColor[i];
	else squares[i].style.backgroundColor="#232323";
	}
	var y=document.querySelector("#kl");
y.textContent=pickcolor;
document.querySelector("h1").style.backgroundColor="steelblue";
}







