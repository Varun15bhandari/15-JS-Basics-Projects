const reviews = [
    {
      id: 1,
      name: "Emily Carter",
      job: "Product Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Transforming ideas into reality is my passion. I'm always focused on delivering the best user experience.",
    },
    {
      id: 2,
      name: "James Anderson",
      job: "Software Engineer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Code is like poetry. I enjoy crafting elegant and efficient solutions to solve complex problems.",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      job: "Graphic Designer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Every pixel tells a story. I strive to create designs that inspire and leave a lasting impression.",
    },
    {
      id: 4,
      name: "Liam Taylor",
      job: "Data Analyst",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Numbers reveal the truth. I love diving into data and uncovering insights that drive decisions.",
    },
    {
      id: 5,
      name: "Olivia Brown",
      job: "Marketing Specialist",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      text: "Crafting compelling stories and campaigns is my forte. I believe marketing is about connecting with people.",
    },
  ];
  
  const img=document.getElementById("person-img");
  const author =document.getElementById("author");
  const job=document.getElementById("job");
  const info =document.getElementById("info");

const nextbtn=document.querySelector(".next-btn");
const prevbtn=document.querySelector(".prev-btn");
const randombtn=document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded",()=>{
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;


})
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
nextbtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
prevbtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
       currentItem=reviews.length-1;
    }
    console.log(currentItem);
    showPerson(currentItem);

})
randombtn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
})







