// ===============================
// AUTHENTIC VISUAL STUDIO
// script.js
// ===============================

// PRELOADER

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 1200);
});

// ===============================
// TYPING EFFECT
// ===============================

const typing = document.getElementById("typing");

const words = [
    "GRAPHIC DESIGNER",
    "VIDEO EDITOR",
    "WEB DEVELOPER",
    "PHOTO RETOUCHER",
    "AI CREATOR"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===============================
// SCROLL ANIMATION
// ===============================

const hiddenElements =
document.querySelectorAll(
".service-card,.portfolio-card,.testimonial,.box,.video-box"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

hiddenElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="1s";

observer.observe(el);

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

if(navLinks.style.display==="flex"){

navLinks.style.display="none";

}else{

navLinks.style.display="flex";

navLinks.style.flexDirection="column";

navLinks.style.position="absolute";

navLinks.style.top="80px";

navLinks.style.right="20px";

navLinks.style.background="#111";

navLinks.style.padding="20px";

navLinks.style.borderRadius="15px";

}

});

// ===============================
// ACTIVE LINK
// ===============================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topButton =
document.createElement("button");

topButton.innerHTML="↑";

topButton.style.position="fixed";

topButton.style.bottom="25px";

topButton.style.right="25px";

topButton.style.width="50px";

topButton.style.height="50px";

topButton.style.border="none";

topButton.style.borderRadius="50%";

topButton.style.background="#00d4ff";

topButton.style.color="#000";

topButton.style.fontSize="22px";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.zIndex="999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});