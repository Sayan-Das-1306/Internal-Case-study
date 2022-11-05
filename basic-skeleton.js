var homelink = document.querySelector(".Home");
var aboutlink = document.querySelector(".About");
var contactlink = document.querySelector(".Contact");

var homeContent = document.querySelector(".homeContent");
var aboutContent = document.querySelector(".aboutContent");
var contactContent = document.querySelector(".contactContent");

homelink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello");
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
    homeContent.style.display = "block";

})

aboutlink.addEventListener("click", (event) => {
    event.preventDefault();
    aboutContent.style.display = "block";
    homeContent.style.display = "none";
    contactContent.style.display = "none";

})

contactlink.addEventListener("click", (event) => {
    event.preventDefault();
    contactContent.style.display = "block";
    homeContent.style.display = "none";
    aboutContent.style.display = "none";

})