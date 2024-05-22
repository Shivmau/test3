let newHeading=document.createElement("h1");
newHeading.innerHTMl="<i> hi , i am new</i>";

document.querySelector("body").prepend("newHeading")


let para=document.querySelector("p")
para.remove();

newHeading.remove();