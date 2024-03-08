/* *Consegna:*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */

const squareWrapper = document.createElement('div');
squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap blue';
squareWrapper.setAttribute('id', 'boxes');

let box = document.createElement('div');
box.setAttribute("class", "box");


for (let i = 0; i < 100; i++) {
    let color;
    let text;
    let box = document.createElement('div');
    box.setAttribute("class", "box");
    /* box += ` <div class="box color">${i + 1}</div>`; */
    /*   box.setAttribute("class", "color");  */
    if (i % 3 === 0) {
        color = "green";
        text = "Fizz";
    }
    else if (i % 5 === 0) {
        color = "red";
        text = "Buzz";
    }
    else if (i % 5 === 9 && i % 3 === 0) {
        color = "yellow";
        text = "FizzBuzz";
    }
    else {
        text = i;
    }

};

box.setAttribute("class", "color");
box.innerHTML = text;

squareWrapper.innerHTML = box;

const container = document.querySelector('.container');
container.append(squareWrapper);

