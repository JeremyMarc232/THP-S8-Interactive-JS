// Fonctionnalité 1 & 1bis

const clickerButton = document.getElementsByTagName("footer")[0];
x = 0;
clickerButton.addEventListener("click", function() {;
  console.log("Clique !!!");
  x +=1;
  console.log(`clic n°${x}`);
});

//Fonctionnalité 2

const toggleNavbar = () => {
  const navBar = document.getElementById("navbarHeader")
  navBar.classList.contains("collapse") ? navBar.classList.remove("collapse") : navBar.classList.add("collapse")
 }
 const hamburger = document.getElementsByClassName("navbar-toggler")[0]
 hamburger.addEventListener("click", toggleNavbar)

//Fonctionnalité 3

 const firstCardEditButton = document.getElementsByClassName("btn-group")[0].children[1]
firstCardEditButton.addEventListener("click", () => {
  document.getElementsByClassName("card-text")[0].style.color = 'red'
})

//Fonctionnalité 4
const toggleSecondCardStyle = () => {
  document.getElementsByClassName("card-text")[1].style.color === '' ? document.getElementsByClassName("card-text")[1].style.color = 'green' : document.getElementsByClassName("card-text")[1].style.color = ''
}
const secondCardEditButton = document.getElementsByClassName("btn-group")[1].children[1]
secondCardEditButton.addEventListener("click", toggleSecondCardStyle)
const cdnLink = document.getElementsByTagName("link")[0]

//Fonctionnalité 5
const toggleCdn = () => {
  cdnLink.disabled ? cdnLink.disabled = false : cdnLink.disabled = true
}
const navBar = document.getElementsByClassName("navbar")[0]
navBar.addEventListener("dblclick", toggleCdn)

const viewButtons = document.querySelectorAll(".btn-group")
const cardsImages = document.querySelectorAll(".card-img-top")
const cardsTexts = document.querySelectorAll(".card-text")
const toggleElementDisplay = (element) => {
  element.style.display === "none" ? element.style.display = "block" : element.style.display = "none"