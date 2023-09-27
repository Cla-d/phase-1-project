/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE MENU=====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
// Display Sign Up Form
const viewForm = document.getElementById("homeButton");
const signUpForm = document.getElementById("get_user_data");

document.getElementById("get_user_data").style.display = "none";

function displaySignUpForm() {
  signUpForm.style.display = "block";
}

viewForm.addEventListener("click", (e) => {
  e.preventDefault();
  displaySignUpForm();
});

// Sign up to newsletter

function storeUserData() {
    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
  
    const name = nameInput.value;
    const email = emailInput.value;
  
    const userData = {
      name: name,
      email: email,
    };
  
    console.log(userData);
  
    nameInput.value = "";
    emailInput.value = "";
  }
  
  const addUserButton = document.getElementById("addDataButton");
  addUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    storeUserData();
    window.confirm("You have successfully signed up for our newsletter");
    const signUpForm = document.getElementById("get_user_data");
    signUpForm.style.display = "none";
  });
  
const getMenu = document.getElementsByClassName('nav__item')
getMenu.addEventListener("click", (e) => {
    displayData()
})
function getData() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((jsonData) => displayData(jsonData));
}

function displayData(cocktails) {
  console.log(cocktails.drinks);
  for (item of cocktails.drinks) {
    const card = document.createElement("div");
    card.className = "card";
    const cardDetails = `
        <img src="${item.strDrinkThumb}">
        <h4>${item.strDrink}</h4>
        `;
    card.innerHTML = cardDetails;
    const container = document.getElementById("dataContainer");
    container.appendChild(card);
  }
}

getData();

// function searchCocktail(){
//     const form = document.getElementById("inputBox")
//     if (inputBox.value === "") {
//         alert("You must write something!");
//       } else (inputBox.value == cardDetails) {
//            inputBox.value
//       }
// }
