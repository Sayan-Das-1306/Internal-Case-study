var homelink = document.querySelector(".Home");
var aboutlink = document.querySelector(".About");
var contactlink = document.querySelector(".Contact");

var homeContent = document.querySelector(".homeContent");
var aboutContent = document.querySelector(".aboutContent");
var contactContent = document.querySelector(".contactContent");

document.getElementsByTagName("a")[4].addEventListener("click",(e)=>{
        e.preventDefault();
});

document.getElementsByTagName("a")[5].addEventListener("click",(e)=>{
    e.preventDefault();
});


var button = document.querySelectorAll(".buttonSubmit");

button.forEach(element => {
    element.addEventListener("click",(e)=>{
        e.preventDefault();
    })
});



homelink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello");
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
    homeContent.style.display = "block";
    
    homelink.style.backgroundColor = "#a7acac";
    aboutlink.style.backgroundColor = "";
    contactlink.style.backgroundColor = "";

});

aboutlink.addEventListener("click", (event) => {
    event.preventDefault();
    aboutContent.style.display = "block";
    homeContent.style.display = "none";
    contactContent.style.display = "none";

    homelink.style.backgroundColor = "transparent";
    aboutlink.style.backgroundColor = "#a7acac";
    contactlink.style.backgroundColor = "";

});

contactlink.addEventListener("click", (event) => {
    event.preventDefault();
    contactContent.style.display = "block";
    homeContent.style.display = "none";
    aboutContent.style.display = "none";

    homelink.style.backgroundColor = "transparent" ;
    aboutlink.style.backgroundColor = "";
    contactlink.style.backgroundColor = "#a7acac";

});



const validateFieldOnBlur = (e) => {
    const isPatternMismatch = e.target.validity.patternMismatch ? true : false;
    const isValueMissing = e.target.validity.valueMissing ? true : false;
    const itemContainer = e.target.closest(".account__item");

    switch (true) {
      case isPatternMismatch:
        addPatternMismatchClasses(itemContainer);
        break;
      case isValueMissing:
        addValueMissingClasses(itemContainer);
        console.log("hello");
        break;
      default:
        addValidClasses(itemContainer);
        if (invalidInputs.length) {
          invalidInputs = [];
        }
    }
  }

// Add invalid class and remove valid/mismatch classes
const addValueMissingClasses = (itemContainer) => {
    itemContainer.classList.add("account__item--invalid");
    itemContainer.classList.remove("account__item--valid");
    itemContainer.classList.remove("account__item--mismatch");
  }

// Add valid class and remove mismatch/invalid classes
const addValidClasses = (itemContainer) => {
    itemContainer.classList.add("account__item--valid");
    itemContainer.classList.remove("account__item--invalid");
    itemContainer.classList.remove("account__item--mismatch");
  }