'use strict'

//find the elements in our html that match the corresponding id using the method document.getElementById
let elcookieTable = document.getElementById('cookie-table')
let elForm = document.getElementById('cookie-form')

//declare a variable and assign it the value of an array that will contain all our store hours as strings
let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let stores = []

//declare a new varable and assign the value of an constructor function which will return a new object
let cookieStore = function(name, min, max, cookies) {
  this.name = name
  this.max = max
  this.min = min
  this.cookiesPerStore = cookies
}

//create a prototype method on our wizardschool constructor that will return a random number between the min and max students multiply that by number of spells cast per student
cookieStore.prototype.cookiesMadePerHour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.min - this.max) + this.min)
  return randomNumber * this.cookiesPerStore
}


//instantiating a new instance of the WizardSchool object constructor
let CookieCradle = new cookieStore('CookieCradle', 10, 35, 5)
let CookieCode = new cookieStore('CookieCode', 25, 200, 12)
let CopperCookie = new cookieStore('CopperCookie', 74, 93,44)

//push our new instances of our object constructor on to the end of our schools array
stores.push(CookieCradle, CookieCode, CopperCookie)

//create a new row for our header that will contain our column titles
let elHeader = document.createElement('tr')
elcookieTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Store Name'
//loop through our hours array and display each hour as a table header element
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

//create a prototype method on our wizardschool constructor which will generate a new row for each school and populate the row with the random number returned from our spellscastperhour method
cookieStore.prototype.renderNewStore = function() {
  let elRow = document.createElement('tr')
  elcookieTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = this.name
  for(let i = 0; i < hours.length; i++) {
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = this.cookiesMadePerHour()
  }
}

//loop through our schools array and invoke our rendernewschool method for each one to generate a new row on our table
for(let j = 0; j < stores.length; j++) {
  stores[j].renderNewStore()
}

//access our inputs on our form through dot notation
let elnameOfStore = elForm.nameOfStore 
let elminCookies = elForm.minCookies

//create an event listener that will listen for a submit event and create a new instance of our constructor function using the values collected from our form
elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newStore = new cookieStore(elnameOfStore.value, parseInt(elminCookies.value), 20, 4)
  stores.push(newStore)
  //invoke our rendernewschool method on our new school to generate a new row on our table. 
  newStore.renderNewStore()
})
