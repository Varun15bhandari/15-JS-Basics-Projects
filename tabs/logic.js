const about=document.querySelector(".about");
const btns=document.querySelectorAll(".tab-btn");
const articles=document.querySelectorAll(".content");
about.addEventListener("click",(e)=>{
    // console.log(e.target.dataset.id);
    const id=e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");

        })
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element=document.getElementById(id);
        element.classList.add("active");

    }
    
})
// const section=document.querySelector(".section");
// section.addEventListener("click",(e)=>{
//     console.log(e.target);

// })
// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".article");

// about.addEventListener("click", (e) => {
//     const targetBtn = e.target.closest(".tab-btn"); // Ensure you're targeting the button
//     if (targetBtn) {
//         const id = targetBtn.dataset.id;
//         if (id) {
//             // Remove active class from all buttons and articles
//             btns.forEach((btn) => btn.classList.remove("active"));
//             articles.forEach((article) => article.classList.remove("active"));

//             // Add active class to the clicked button and corresponding article
//             targetBtn.classList.add("active");
//             const element = document.getElementById(id);
//             if (element) {
//                 element.classList.add("active");
//             }
//         }
//     }
// });
// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });