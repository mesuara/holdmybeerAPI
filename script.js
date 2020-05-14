let hh1 = document.querySelector('h1')
let image = document.querySelector('img')

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.punkapi.com/v2/beers/random", false); 
// xhr.send(); 
// let data= JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
// console.log(data)

let button = document.querySelector('button')
button.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', () => {
    let data = JSON.parse(xhr.responseText);
    console.log(data)
    if (button.innerText === 'Click to see a random beer') {
      button.innerText = 'Click for another beer'
    }
    let imsrc = ''
    if (data[0].image_url === null) {
      imsrc = 'https://cdn.clipart.email/dccbdba9ee4255c5a97a702b775ee2b4_drink-beer-cheer-png-clipart-beer-beer-clipart-celebrate-_650-446.jpeg'
    } else {
      imsrc = data[0].image_url
    }
    image.src = imsrc
    let newH1 = document.querySelector('#anw')

    newH1.innerText = data[0].name
  })
  xhr.open("GET", "https://api.punkapi.com/v2/beers/random", false);
  xhr.send();
})
// let newUl = document.createElement('ol')
// for(cat of data.all){

//   let newLi = document.createElement('li')
//   newLi.innerText = cat.text 
//   newUl.append(newLi)
// }

