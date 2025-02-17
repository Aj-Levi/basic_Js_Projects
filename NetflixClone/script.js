let languageDropDown = document.body.querySelector(".language");
let countriesDropDown = document.body.querySelector(".country");

languageDropDown.addEventListener("click", () => {
    const listItems = document.body.querySelectorAll(".languages li");
    listItems.forEach((item) => {
        item.classList.toggle("trans");
    });
});
countriesDropDown.addEventListener("click", () => {
    const listItems = document.body.querySelectorAll(".countries li"); 
    listItems.forEach((item) => {
        item.classList.toggle("trans"); 
    });
});

let quescont=document.body.querySelector(".ques-cont");

quescont.addEventListener("click",(ele)=>{
    const ques = ele.target.closest(".ques");
    if(ques){
        ques.firstElementChild.classList.toggle("rotate");
        ques.nextElementSibling.classList.toggle("trans2");
    }
})