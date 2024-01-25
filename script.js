const openMenu = document.getElementById("menu");
const hideMenu = document.getElementById("hide-menu");
const sideMenu = document.getElementById("nav-menu");

openMenu.addEventListener("click", () => {
  hideMenu.style.left = "0px";
  sideMenu.style.display = "none";
});

hideMenu.addEventListener("click", function () {
    hideMenu.style.left = "-100%";
    sideMenu.style.display = "flex";
});
