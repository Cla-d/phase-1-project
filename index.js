/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== HIDE MENU=====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

function getData(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => response.json())
    .then(jsonData => displayData(jsonData))
}

function displayData(cocktails){
    console.log(cocktails.drinks);
    for(item of cocktails.drinks){
        const card = document.createElement('div')
        card.className="card"
        const cardDetails=`
        <img src="${item.strDrinkThumb}">
        <h4>${item.strDrink}</h4>
        `
        card.innerHTML=cardDetails
        const container= document.getElementById("dataContainer")
        container.appendChild(card)

    }
    
}

getData()

function searchName(){
    const form = document.getElementById("searchForm")
    const input = document.getElementById("name").value

    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita?name=${input}`)
        .then(response => response.json())
        .then(data => {
            if(data.length != 0){
                const resultContainer =document.getElementById("resultsContainer")
                resultContainer.className="card resultcard"
                for(item of data){
                    const resultDetails= `
                    <img src="${item.strDrinkThumb}">
                    <h4>${item.strDrink}</h4>
                `
                resultContainer.innerHTML = resultDetails
                }
            } else{
                const resultContainer =document.getElementById("resultsContainer")
                resultContainer.className="card"
                const notFoundMessage = `<h2>Sorry, we don't have that drink</h2>`
                resultContainer.innerHTML= notFoundMessage
            }
            form.reset()
        })
    })
}

const searchButton= document.getElementById("searchButton")
searchButton.addEventListener("click", searchName)
