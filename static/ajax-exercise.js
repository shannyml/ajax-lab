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
// function updateMelons(results) {
//   if (results.code === 'OK') {
//     document.querySelector('#order-status').innerHTML = `<p>${results.msg}</p>`;
//     document.querySelector('#order-status').classList.remove('order-error');
//   } else {
//     document.querySelector('#order-status').innerHTML = `<p><b>${results.msg}<b></p>`;
//     document.querySelector('#order-status').classList.add('order-error');
//   }


function orderMelons(evt) {
  evt.preventDefault();
  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  
  fetch("/order-melons.json", {
    method: "POST",
    body: JSON.stringify(formInputs), 
    headers: {
      "Content-Type": "application/json",
  },
})
    .then((response) => response.json())
    .then((jsonResponse) => {
   if (jsonResponse.code === "ERROR") {
      document.querySelector("#order-status").style.color = "red";
   }
   document.querySelector("#order-status").innerHTML = jsonResponse.msg;
  })
}

document.querySelector('#order-form').addEventListener('submit', orderMelons);
