const colors = [
    "red", "blue", "green", "yellow", "orange", 
    "purple", "pink", "brown", "black", "white", 
    "gray", "cyan", "magenta", "lime", "teal", 
    "indigo", "violet", "gold", "silver", "maroon", 
    "navy", "beige", "olive", "coral", "turquoise"
  ];
  const button=document.getElementById("btn");
  const display=document.querySelector(".color");
  button.addEventListener("click",()=>{
    const randomNumber=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    display.textContent=colors[randomNumber];
    
  })
  