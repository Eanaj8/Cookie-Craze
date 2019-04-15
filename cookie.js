'use strict'

let elcookieTable = document.getElementById('cookie-table')
let elForm = document.getElementById('cookie-form')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let stores = []

let cookieStore = function(name, min, max, cookies) {
  this.name = name
  this.max = max
  this.min = min
  this.cookiesPerStore = cookies
}


cookieStore.prototype.cookiesMadePerHour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.min - this.max) + this.min)
  return randomNumber * this.cookiesPerStore
}


let CookieCradle = new cookieStore('CookieCradle', 10, 35, 5)
let CookieCode = new cookieStore('CookieCode', 25, 200, 12)
let CopperCookie = new cookieStore('CopperCookie', 74, 93,44)


stores.push(CookieCradle, CookieCode, CopperCookie)

let elHeader = document.createElement('tr')
elcookieTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Store Name'

for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}


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


for(let j = 0; j < stores.length; j++) {
  stores[j].renderNewStore()
}

let elnameOfStore = elForm.nameOfStore 
let elminCookies = elForm.minCookies


elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newStore = new cookieStore(elnameOfStore.value, parseInt(elminCookies.value), 20, 4)
  stores.push(newStore)
  
  newStore.renderNewStore()
})
