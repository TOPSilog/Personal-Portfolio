//Movement Animation
const card = document.querySelector(".card");  
const container = document.querySelector(".container");  
//Items  
const title = document.querySelector(".id-title");  
const idPhoto = document.querySelector(".id-photo img");  
const more = document.querySelector(".id-more");  
const description = document.querySelector(".info h3");  
const nav = document.querySelector(".id-nav");  
//Moving Animation Event  
container.addEventListener("mousemove", (e) => {  
 let xAxi = (window.innerWidth / 2 - e.pageX) / 25;  
 let yAxi = (window.innerHeight / 2 - e.pageY) / 25;  
 card.style.transform = `rotateY(${xAxi}deg) rotateX(${yAxi}deg)`;  
});  
//Animate In  
container.addEventListener("mouseenter", (e) => {  
 card.style.transition = "none";  
 //Popout  
 title.style.transform = "translateZ(150px)";  
 idPhoto.style.transform = "translateZ(200px) rotateZ( 5deg)";  
 description.style.transform = "translateZ(125px)";  
 nav.style.transform = "translateZ(100px)";  
 more.style.transform = "translateZ(75px)";  
});  
//Animate Out  
container.addEventListener("mouseleave", (e) => {  
 card.style.transition = "all 0.5s ease";  
 card.style.transform = `rotateY(0deg) rotateX(0deg)`;  
 //Popback  
 title.style.transform = "translateZ(0px)";  
 idPhoto.style.transform = "translateZ(0px) rotateZ(0deg)";  
 description.style.transform = "translateZ(0px)";  
 nav.style.transform = "translateZ(0px)";  
 more.style.transform = "translateZ(0px)";  
});  