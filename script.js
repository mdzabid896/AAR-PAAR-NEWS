// ===============================
// AAR-PAAR NEWS - script.js Part 1
// ===============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Search

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const value = searchInput.value.trim();

    if(value===""){
        alert("Please enter a news topic.");
        return;
    }

    alert("Searching for: " + value);

});

// Press Enter to Search

searchInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        searchBtn.click();

    }

});

// Highlight Active Menu

const links=document.querySelectorAll(".navbar a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(a=>a.classList.remove("active"));

link.classList.add("active");

});

});

// ===============================
// AAR-PAAR NEWS - script.js Part 2
// ===============================

// Breaking News Auto Change

const breaking = document.querySelector(".breaking-news marquee");

const newsList = [
"🔥 Welcome to AAR-PAAR NEWS",
"🇮🇳 India Breaking News Updated",
"🌍 World News Every Minute",
"🏏 Live Sports Updates",
"💻 Latest Technology News",
"🎬 Entertainment Headlines",
"💼 Business News Updates"
];

let index = 0;

setInterval(() => {
    index++;
    if(index >= newsList.length){
        index = 0;
    }
    breaking.textContent = newsList[index];
},3000);


// Hero Button

const heroBtn = document.querySelector(".btn");

heroBtn.addEventListener("click",function(e){
    e.preventDefault();

    document.querySelector(".news-container").scrollIntoView({
        behavior:"smooth"
    });
});


// News Card Animation

const cards = document.querySelectorAll(".news-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// Footer Year

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if(footer){
footer.innerHTML="© "+year+" AAR-PAAR NEWS. All Rights Reserved.";
}
