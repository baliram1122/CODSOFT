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


