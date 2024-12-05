const Decrease=document.querySelector(".decrease");
const Reset=document.querySelector(".reset");
const Increase=document.querySelector(".increase");
const display=document.querySelector("#value");
let count=0;
Decrease.addEventListener("click",()=>{
  count=count-1;
   display.textContent=count;
   updateColor()
})
Reset.addEventListener("click",()=>{
  count=0;
    display.textContent=count;
   updateColor()
})
Increase.addEventListener("click",()=>{
  count=count+1;
   display.textContent=count;
   updateColor()
})
function updateColor(){
  if(count>0){
    display.style.color="green";
  }else if(count<0){
    display.style.color="orange";
  }else{
    display.style.color="white";
  }
}
