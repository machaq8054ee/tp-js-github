let notes = [12, 8, 15, 10, 7];

let somme = 0;
let meilleureNote = notes[0];
let admis = 0;

for (let i = 0; i < notes.length; i++) {
    somme += notes[i];

    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }

    if (notes[i] >= 10) {
        admis++;
    }
}

let moyenne = somme / notes.length;

console.log("Moyenne :", moyenne);
console.log("Meilleure note :", meilleureNote);
console.log("Nombre de notes ≥ 10 :", admis);

