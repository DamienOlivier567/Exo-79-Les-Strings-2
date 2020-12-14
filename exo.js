let pomme = "Elle est belle ma pomme !";
let indexPomme = document.getElementById("index-pomme");
console.log(pomme.lastIndexOf('pomme'));

let lastIndex = document.getElementById("last-index-m")
console.log(pomme.lastIndexOf('m'));

let aTrouver = "Elle";
let fini = "!"

if (pomme.startsWith(aTrouver)){
    console.log("Elle est belle ma pomme ! Commence par elle");
}
else {
    console.log("Ce n'est  pas bon");
}

if (pomme.endsWith(fini)){
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

let idPomme = document.getElementById("pomme");
let motPomme = "pomme";
let nouvellePomme = motPomme.substring(0, 5);
idPomme.innerHTML = nouvellePomme;

let para = document.getElementById("one-line");
let tableau = pomme;


for (let i = 0 ; i <tableau.length; i++){
    para.innerHTML += tableau[i] + "<br>";
}



