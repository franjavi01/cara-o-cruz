let array = [`<img src="./images/cruz.jpg"><h1><strong>Cruz</strong></h1>`, `<img src="./images/cara.jpg"><h1><strong>Cara</strong></h1>`];

let randomItem = array[Math.floor(Math.random()*array.length)];

document.body.innerHTML = randomItem;