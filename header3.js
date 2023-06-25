console.log("hii");
var menuList = document.querySelector(".menuList-header3");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    console.log("clicked");
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "200px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}