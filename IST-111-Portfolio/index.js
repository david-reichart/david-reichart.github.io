const darkModeButton = document.getElementById("dark-light-toggle-button");
const toTopButton = document.getElementById("to-top-button");
const domBody = document.getElementsByTagName("body");
const domParagraphs = document.getElementsByTagName("p");
const domH1 = document.getElementsByTagName("h1");
const domH2toH4 = document.getElementsByClassName("sub-header");
let pageMode = "";
window.addEventListener("load", setMode);
darkModeButton.addEventListener("click", toggleDarkMode);
function toggleDarkMode() {
    if (pageMode === "light") {
        darkModeButton.style.color = "#000000";
        toTopButton.style.color = "#000000";
        for (let i = 0; i < domBody.length; i++) {
            domBody[i].style.background = "#1e1f22";
        }
        for (let i = 0; i < domParagraphs.length; i++) {
            domParagraphs[i].style.color = "#ffffff";
        }
        for (let i = 0; i < domH1.length; i++) {
            domH1[i].style.color = "#ffffff";
        }
        for (let i = 0; i < domH2toH4.length; i++) {
            domH2toH4[i].style.color = "#297be0";
        }
        pageMode = "dark";
    }
    else if (pageMode === "dark") {
        darkModeButton.style.color = "#ffffff";
        toTopButton.style.color = "#ffffff";
        for (let i = 0; i < domBody.length; i++) {
            domBody[i].style.background = "#ffffff";
        }
        for (let i = 0; i < domParagraphs.length; i++) {
            domParagraphs[i].style.color = "#000000";
        }
        for (let i = 0; i < domH1.length; i++) {
            domH1[i].style.color = "#000000";
        }
        for (let i = 0; i < domH2toH4.length; i++) {
            domH2toH4[i].style.color = "#11427E";
        }
        pageMode = "light";
    }
}
function setMode() {
    pageMode = "light";
}