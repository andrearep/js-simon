/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//funzione numeri random
function randomNum(min, max) {
    return Math.ceil(Math.random() * (max - min) * min)
}

//inseriamo i 5 numeri nel html
var i = 0;
//array per controllare che non ci siano doppioni nei numeri casuali
var array = [];
while (i < 5) {
    var number = randomNum(1, 100);
    if (!array.includes(number)) {
        array.push(number);
        document.getElementsByClassName("numero")[i].innerHTML = number;
        i++;
    }
}
function timerSeconds(secondi) {
    var tempo = secondi;
    var timer = setInterval(function () {
        document.getElementById("timer").innerHTML = tempo;
        if (tempo === 0) {
            for (var i = 0; i < array.length; i++) {
                document.getElementsByClassName("numero")[i].innerHTML = "";
            }
        } else {
            tempo--;
        }
    }, 100);

}

timerSeconds(30)

function SceltaNumeri() {
    var j = 0;
    var arrayUtente = [];


    while (j < 5) {
        number = parseInt(prompt("inserire il numero :)"))
        if (isNaN(number) || number < 0 || number == null) {
            alert("inserisci un numero valido");
        } else {
            if (array.includes(number)) {
                arrayUtente.push(number);
                document.getElementsByClassName("numero")[j].innerHTML = number;
            }

            j++;
        }
    }
    alert("hai indovinato " + arrayUtente.length + " numeri:");
}

setTimeout(SceltaNumeri, 5000)
