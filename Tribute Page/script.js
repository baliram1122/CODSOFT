const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove("show")
        } 

        if (entry.isIntersecting) {
            entry.target.classList.add('fadein')   
        } else {
            entry.target.classList.remove('fadein')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((e1) => observer.observe(e1))

const fadeOutElems  = document.querySelectorAll(".fadeout")
fadeOutElems.forEach((e1) => observer.observe(e1))


const dynamicText = document.querySelector("#dynamic-text").children,
    txtsLen = dynamicText.length
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        dynamicText[i].classList.remove("text-in", "text-out");
    }
    dynamicText[index].classList.add("text-in");

    setTimeout(function () {
        dynamicText[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;


