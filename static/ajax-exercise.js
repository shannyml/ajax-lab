'use strict';

// PART 1: SHOW A FORTUNE
function replaceFortune(results) {
  document.querySelector("#fortune-text").innerHTML = results;
}

function showFortune(evt) {
  fetch('/fortune')
    .then((response) => response.text())
    .then(replaceFortune);
  
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  
  fetch(`/weather.json?zipcode=${zipcode}`)
    .then((response) => response.json())
    .then((jsonData) => {
      document.querySelector('#weather-info').innerHTML = jsonData.forecast;
  });


}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS
function updateMelons() {
  if (results.code === 'OK') 
    document.quearySelector('#order-status').innerHTML = <p>${results.msg}</p>

  else

}

function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    melon: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  
  fetch('/order-melons.json', params), {
    .then((response) => response.json())
    .then((updateMelons);
  }
  const params = {
    method: 'POST',
    body: JSON.stringify(formInputs), 
    headers: {
      'Content-Type': 'application/json'
    },
  }
  }
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

document.querySelector('#order-form').addEventListener('submit', orderMelons);
