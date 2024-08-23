// var tabLinks = document.getElementsByClassName('tab-links');
// var tabContents = document.getElementsByClassName('tab-contents');

// function opentab(tabName){
//     for(let tabLink of tabLinks){
//         tabLink.classList.remove("active-link");
//     }
//     for(let tabContent of tabContents){
//         tabContent.classList.remove("active-tab");
//     } 
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabName).classList.add("active-tab");
// }

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}