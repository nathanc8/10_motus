let wellPlaced = [];
let notInWord = [];
let missplaced = [];

function tryWord(word, base) {
    //Rends le jeu insensible à la casse
    word = word.toLowerCase();
    base = base.toLowerCase();
    wellPlaced = [];
    notInWord = [];
    missplaced = [];
    /* if (word === base) {
        wellPlaced = word.split("");
        return { wellPlaced, missplaced, notInWord };
    } else { */
    let arrayBase = base.split("");
    let arrayWord = word.split("");
    if (word === base) {
        wellPlaced = word.split("");
    } else {
        arrayWord.forEach((char, index) => {
            if (char === arrayBase[index]) {
                wellPlaced.push(char);
                arrayBase[index] = null;
            }
        });

        arrayWord.forEach((char, index) => {
            if (arrayBase.includes(char)) {
                if (char !== arrayBase[index]) {
                    missplaced.push(char);
                    arrayBase[index] = null;
                }
            } else if (!arrayBase.includes(char)) {
                notInWord.push(char);
            }
        });
        console.log("wellPlaced is : ", wellPlaced, typeof wellPlaced);
        console.log("wellPlaced is : ", missplaced, typeof missplaced);
        console.log("wellPlaced is : ", notInWord, typeof notInWord);
        return { wellPlaced, missplaced, notInWord };
    }
}
function guess() {
    let base = "dictionnaire";
    let word = document.getElementById("word").value;
    let result = tryWord(word, base);
    document.getElementById("word").value = "";
    document.getElementById("try").innerText = word;
    document.getElementById("well").innerText = "Bien placé: " + result.wellPlaced.join(", ");
    document.getElementById("miss").innerText = "Mal placé: " + result.missplaced.join(", ");
    document.getElementById("not").innerText = "Pas dans le mot: " + result.notInWord.join(", ");
    if (wellPlaced.length === base.length) {
        document.getElementById("win").innerText = "Vous avez gagné";
    }
}
