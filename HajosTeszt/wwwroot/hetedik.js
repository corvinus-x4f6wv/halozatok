﻿var kérdések;
var jelenglegiKérdés = 0;

window.onload = function letöltés() {
        fetch("/questions.json")
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
       kérdésMegjelenítés(0);
    }

function kérdésMegjelenítés(k) {
    let ide = document.getElementById("kérdés_szöveg");
    ide.innerHTML = kérdések[k].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[k].answer1
    for (var i = 0; i < 3; i++) {
        console.log(kérdések[k].questionText)
        let elem = document.getElementById("válasz" + i)
        elem.innerHTML=kérdések[k]["answer"+i]
    }

    if (document.getElementById("kép1").src != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image
    }

    jóVálasz = kérdések[k].correctAnswer;

    válasz1.classList.remove("jo", "rossz");
    válasz2.classList.remove("jo", "rossz");
    válasz3.classList.remove("jo", "rossz");
}

function kattElőre() {
    jelenglegiKérdés++;
    if (jelenglegiKérdés == kérdések.length) {
        jelenglegiKérdés = 0;
    }
    kérdésMegjelenítés(jelenglegiKérdés);
}

function kattVissza() {
    if (jelenglegiKérdés == 0) {
        jelenglegiKérdés = 2;
        kérdésMegjelenítés(jelenglegiKérdés);
    }
    else {
        jelenglegiKérdés = jelenglegiKérdés - 1;
        kérdésMegjelenítés(jelenglegiKérdés);
    }
}

function megjelöltVálasz1() {
    let megjelöltválasz1 = document.getElementById("válasz1");
    if (jóVálasz = 1) {
        megjelöltválasz1.classList.add("jo");
    }
    else {
        megjelöltválasz1.classList.add("rossz");
    }
}

function megjelöltVálasz2() {
    let megjelöltválasz2 = document.getElementById("válasz2");
    if (jóVálasz = 2) {
        megjelöltválasz2.classList.add("jo");
    }
    else {
        megjelöltválasz2.classList.add("rossz");
    }
}

function megjelöltVálasz3() {
    let megjelöltválasz3 = document.getElementById("válasz3");
    if (jóVálasz = 3) {
        megjelöltválasz3.classList.add("jo");
    }
    else {
        megjelöltválasz3.classList.add("rossz");
    }
}
fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}

window.onload = function letöltés2() {

    kérdésBetöltés(jelenlegiKérdés)
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    console.log(kérdés.image)
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {

        document.getElementById("kép1").style.display = none;
    }


    jóVálasz = kérdés.correctAnswer;

    válasz1.classList.remove("jo", "rossz");
    válasz2.classList.remove("jo", "rossz");
    válasz3.classList.remove("jo", "rossz");
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));

    válasz1.classList.remove("jo", "rossz");
    válasz2.classList.remove("jo", "rossz");
    válasz3.classList.remove("jo", "rossz");

}

function kattElore() {
    jelenlegiKérdés++;
    if (jelenlegiKérdés == 100) {
        jelenlegiKérdés = 0;
    }

    kérdésBetöltés(jelenlegiKérdés);
}

function kattVissza() {
    if (jelenlegiKérdés == 1) {
        jelenlegiKérdés = 2;
        kérdésBetöltés(jelenlegiKérdés);
    }
    else {
        jelenlegiKérdés = jelenlegiKérdés - 1;
        kérdésBetöltés(jelenlegiKérdés);
    }
}

function megjelöltVálasz1() {
    let megjelöltválasz1 = document.getElementById("válasz1");
    if (jóVálasz == 1) {
        megjelöltválasz1.classList.add("jo");
    }
    else {
        megjelöltválasz1.classList.add("rossz");
    }
}

function megjelöltVálasz2() {
    let megjelöltválasz2 = document.getElementById("válasz2");
    if (jóVálasz == 2) {
        megjelöltválasz2.classList.add("jo");
    }
    else {
        megjelöltválasz2.classList.add("rossz");
    }
}

function megjelöltVálasz3() {
    let megjelöltválasz3 = document.getElementById("válasz3");
    if (jóVálasz == 3) {
        megjelöltválasz3.classList.add("jo");
    }
    else {
        megjelöltválasz3.classList.add("rossz");
    }
}