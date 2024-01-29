// *------------ Element Variables----------------------------------
let dataRow = document.getElementById('dataRow')
let searchContainer = document.getElementById('searchContainer')
// &------------Application Variables----------------------------
let sideBarWidth = $('.sideBar').outerWidth();
let sideBarLeft = $('.sideBar').css('marginLeft')
// ^-----------------------Contact Validation ----------------------------------
function contactForm(){
    dataRow.innerHTML = ''
    let container = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="nameValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="emailValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="phoneValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="ageValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onkeyup="passValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="rePasswordInput" onkeyup="rePassValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="rePasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" onclick = 'validation ()' class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div>`
dataRow.innerHTML = container

}
function nameValidation(){
    let nameInput = document.getElementById('nameInput')
    let nameAlert = document.getElementById('nameAlert')
    let regexName = /^[a-zA-Z ]+$/
    let nameRegex = regexName.test(nameInput.value)
    if (nameRegex) {
        nameAlert.classList.remove('d-block')
        nameAlert.classList.add('d-none')
        
    }else{
        nameAlert.classList.remove('d-none')
        nameAlert.classList.add('d-block')
    }
    return nameRegex
}
function emailValidation(){
    let emailInput = document.getElementById('emailInput')
    let emailAlert =document.getElementById('emailAlert');
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let emailRegex = regexEmail.test(emailInput.value)
    if (emailRegex) {
        emailAlert.classList.remove('d-block')
        emailAlert.classList.add('d-none')
        
    }else{
        emailAlert.classList.remove('d-none')
        emailAlert.classList.add('d-block')
    }
    return emailRegex
}
function phoneValidation(){
    const phoneInput = document.getElementById('phoneInput');
    const phoneAlert = document.getElementById('phoneAlert');
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    let phoneRegex = regexPhone.test(phoneInput.value)
    if (phoneRegex) {
        phoneAlert.classList.remove('d-block')
        phoneAlert.classList.add('d-none')
        
    }else{
        phoneAlert.classList.remove('d-none')
        phoneAlert.classList.add('d-block')
    }
    return phoneRegex
}
function ageValidation(){
    const ageInput = document.getElementById('ageInput');
    const ageAlert = document.getElementById('ageAlert');
    let regexAge = /^(1[89]|[2-9]\d)$/
    let ageRegex = regexAge.test(ageInput.value)
    if (ageRegex) {
        ageAlert.classList.remove('d-block')
        ageAlert.classList.add('d-none')
        
    }else{
        ageAlert.classList.remove('d-none')
        ageAlert.classList.add('d-block')
    }
    return ageRegex
}
function passValidation(){
    const passwordInput = document.getElementById('passwordInput');
    const passwordAlert = document.getElementById('passwordAlert');
    let regexPass = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
    let passRegex = regexPass.test(passwordInput.value)
    if (passRegex) {
        passwordAlert.classList.remove('d-block')
        passwordAlert.classList.add('d-none')
        
    }else{
        passwordAlert.classList.remove('d-none')
        passwordAlert.classList.add('d-block')
    }
    return passRegex
}
function rePassValidation(){
    const rePasswordInput = document.getElementById("rePasswordInput");
    const rePasswordAlert = document.getElementById("rePasswordAlert");
    if (rePasswordInput.value == passwordInput.value) {
        rePasswordAlert.classList.remove('d-block')
        rePasswordAlert.classList.add('d-none')
    
    }else{
        rePasswordAlert.classList.remove('d-none')
        rePasswordAlert.classList.add('d-block')
    }
    return rePasswordInput.value == passwordInput.value
}
function validation () {
    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passValidation() &&  rePassValidation() ) {
        console.log('esraa')
        
    }else{
        console.log('error')
    }
    
}

$('#contact').on('click', function(){
    contactForm()
    closeSideBar ()
})


// ~--------------------------Side Bar-----------------------------

console.log(sideBarLeft)
$('.sideBar').animate({marginLeft:`-${sideBarWidth}`})

// ^ ----------Close Nav bar---------------------
function closeSideBar () {
    $('.sideBar').animate({marginLeft:`-${sideBarWidth}`},500)
    console.log("esraa");
    $('#closeNav').addClass('d-none');
    $('#openNav').removeClass('d-none');
    
}

// *------------Open Nav Bar--------------
function openSideBar () {
    $('.sideBar').animate({marginLeft:'0px'},500)
    console.log("esraa");
    $('#openNav').addClass('d-none');
    $('#closeNav').removeClass('d-none')
    
}


// !----------------------------------------------------------------------------------------------------------------
// *---------------------Display Random Meals---------------------------------------------------
function displayDataMeals(list){
    dataRow.innerHTML = ''
    let container = '';
    for (let i = 0; i < list.length; i++) {
        container += `<div class="cards col-lg-3 col-md-6 px-2  shadow rounded-3 ">
        <div onclick="getRecipes('${list[i].idMeal}')" class="shadow rounded-3 position-relative" >
          
            <img src="${list[i].strMealThumb}" class="w-100 rounded-3" alt="" srcset="">
            <div class="overlay d-flex align-items-center">
                <h3 class="ps-3">${list[i].strMeal}</h3>

            </div>
        </div>
    </div>`
    dataRow.innerHTML = container
        
    }

}
async function getRandomMeal(){
    loadingScreen()
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let res = await xhr.json();
    console.log(res.meals);
    displayDataMeals(res.meals)
}
getRandomMeal()

// &---------------------------Categories-----------------------------------------------------------------------

async function getMeal(){
    searchContainer.innerHTML=''
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let res = await xhr.json();
    console.log(res.categories);
    displayData(res.categories)
}

function displayData(list){
    let container = '';
    for (let i = 0; i < list.length; i++) {
        container += `<div class="cards col-lg-3 col-md-6 px-2  shadow rounded-3 ">
        <div onclick="getCategoryMeals('${list[i].strCategory}')"class="shadow rounded-3 position-relative">
          
            <img src="${list[i].strCategoryThumb}" class="w-100 rounded-3" alt="" srcset="">
            <div class="overlay align-items-center">
                <h2 class="ps-3">${list[i].strCategory}</h2>
                <p>${list[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>

            </div>
        </div>
    </div>`
    dataRow.innerHTML = container
        
    }

}
async function getCategoryMeals (category) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let res = await xhr.json();
    console.log(res.meals);
    displayDataMeals(res.meals)
    // displayArea(res.meals)
    
}


// *-----------------------------------------Meals By Area---------------------------------------------------
async function getArea () {
    searchContainer.innerHTML=''
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let res = await xhr.json();
    console.log(res.meals);
    // displayData(res.categories)
    displayArea(res.meals)
    
}

function displayArea(list){
    let container = ""
    for (let i = 0; i < list.length; i++) {
        container += `<div class="cards  col-md-3 text-white">
    <div onclick="getAreaMeals('${list[i].strArea}')" class="rounded-2 text-center cursor-pointer">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${list[i].strArea}</h3>
    </div>
</div>`
dataRow.innerHTML = container
        
    }
    
}
async function getAreaMeals (city) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
    let res = await xhr.json();
    console.log(res.meals);
    displayDataMeals(res.meals)
    
}

// ^------------------------------------------Ingredients----------------------------------------------
async function getIngredients () {
    searchContainer.innerHTML=''
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let res = await xhr.json();
    console.log(res.meals);
    displayIngredients(res.meals)
}

function displayIngredients(list){
    let container = ""
    for (let i = 0; i < list.length; i++) {
        container += `<div class="cards col-md-3 text-white">
    <div onclick="getIngredientsMeals('${list[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${list[i].strIngredient}</h3>
            <p>${list[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
    </div>
</div>`
dataRow.innerHTML = container
        
    }
    
}
async function getIngredientsMeals (ingredients) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    let res = await xhr.json();
    console.log(res.meals);
    displayDataMeals(res.meals)
    
}

// *-----------------------------------------Search Meal----------------------------------------------------
function createInputsElement(){
    dataRow.innerHTML = ""
    
        let container = '';
            container += `
            <div class="col-md-6 col-sm-12">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent w-90 text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6 col-sm-12">
            <input onkeyup="searchByLetter(this.value)" maxlength="1" class="form-control w-90 bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>`
        searchContainer.innerHTML = container
}

async function searchByName (name) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let res = await xhr.json();
    console.log(res.meals);
    res.meals ? displayDataMeals(res.meals) : displayDataMeals([])
}
async function searchByLetter (letter) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let res = await xhr.json();
    console.log(res.meals);
    res.meals ? displayDataMeals(res.meals) : displayDataMeals([])
}

// &--------------------------------------------Display Recipes------------------------------------------------
async function getRecipes (mealId) {
    let xhr = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    let res = await xhr.json();
    console.log(res.meals);
    displayRecipes(res.meals)
    
}
// getRecipes (52977)
function displayRecipes(list) {
    searchContainer.innerHTML = '';
    dataRow.innerHTML = '';
    let container = '';

    for (let i = 0; i < list.length; i++) {
        container += `
        <div class="col-lg-4 text-white">
            <div class="photo rounded-3">
                <img src="${list[i].strMealThumb}" alt="" srcset="" class="w-100 rounded-3">
            </div>
            <h2>${list[i].strMeal}</h2>
        </div>
        <div class="col-lg-8 text-white ps-3">
            <h2>Instructions</h2>
            <p>${list[i].strInstructions}</p>
            <h3>Area: <span>${list[i].strArea}</span></h3>
            <h3>Category: <span>${list[i].strCategory}</span></h3>
            <h3>Ingredients:</h3>
            <div class="recipes-container d-flex flex-wrap">
                         ${getIngredientList(list[i])}
            </div>
            
            
            <h3 class="my-3">Tags:</h3>
            <div class="tags-container d-flex flex-wrap">
                         ${tagsList(list[i])}
            </div>
            <div class="d-flex flex-wrap">
                <div class="m-2"><a href="${list[i].strSource}" target="_blank" class="btn btn-success">Source</a></div>
                <div class="m-2"><a href="${list[i].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a></div>
            </div>
        </div>`;
    }

    dataRow.innerHTML = container;
}

function getIngredientList(recipe) {
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measurement = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredients += `<div class="recipes m-2">${measurement} ${ingredient}</div>`;
        }
    }
    return ingredients;
}

  function tagsList(list){
    let tags = list.strTags?.split(",")
    console.log(tags);
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        console.log(tags[i]);
        tagsStr += `
        <div class="tags m-2">${tags[i]}</div>`
    }
    return tagsStr;
  }
// ~----------------------------Event Listeners-------------------------------
$('#openNav').on('click',openSideBar)
$('#closeNav').on('click',closeSideBar)
$('#categories').on('click', function(){
    getMeal()
    closeSideBar ()
})
$('#area').on('click', function(){
    getArea ()
    closeSideBar ()
})
$('#ingredients').on('click', function(){
    getIngredients ()
    closeSideBar ()
})
$('#contact').on('click', function(){
    contactForm()
    closeSideBar ()
})
$('#search').on('click', function(){
    createInputsElement()
    closeSideBar ()
})
function loadingScreen(){
    $(function(){
        $('.loaderScreen').fadeOut(500)
        $('body').css('overflow','auto')
    })

}



