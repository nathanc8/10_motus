function tryWord(word, base) {
    //Rends le jeu insensible à la casse
    word = word.toLowerCase();
    base = base.toLowerCase();
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

    let arrayBase = base.split("");
    let arrayWord = word.split("");
    //Vérifie si le mot est un match parfait
    if (word === base) {
        wellPlaced = word.split("");
    } else {
        //Vérifie si certains charactères sont parfaitement placés, les push dans le tableau wellPlaced et remplacent ceux qui correspondent à ce critère par une valeur null
        arrayWord.forEach((char, index) => {
            if (char === arrayBase[index]) {
                wellPlaced.push(char);
                arrayBase[index] = null;
            }
        });
        //Vérifie si certains charactères sont correctes, mais mal placés, les push dans le tableau missPlaced et retire ceux qui correspondent à ce critère par une valeur null.
        arrayWord.forEach((char, index) => {
            if (arrayBase.includes(char)) {
                if (char !== arrayBase[index]) {
                    missplaced.push(char);
                    arrayBase[index] = null;
                }
                //Vérifie si certains charactères sont incorrectes, et les push dans le tableau notInWord
            } else if (arrayBase.includes(char) === false) {
                notInWord.push(char);
            }
        });
        console.log("wellPlaced is : ", wellPlaced, typeof wellPlaced);
        console.log("wellPlaced is : ", missplaced, typeof missplaced);
        console.log("wellPlaced is : ", notInWord, typeof notInWord);
    }
    return { wellPlaced, missplaced, notInWord };
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
    if (result.wellPlaced.length === base.length) {
        document.getElementById("win").innerText = "Vous avez gagné";
    }
}
