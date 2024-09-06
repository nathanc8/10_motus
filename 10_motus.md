# Enoncé

Motus est un jeu télévisé où les candidats doivent deviner un mot. Leur est fourni un nombre de lettres et la première lettre du mot à deviner. Quand un candidat propose un mot, on lui dit si les lettres données sont bonnes, mal placées, ou pas dans le mot.

Vous trouverez en annexe les sources HTML et JavaScript du jeu Motus. Ces sources présentent des bugs.

L’objectif de l’exercice est d’avoir un jeu fonctionnel.

## Étape 1

Commencez par intégrer le code en annexe dans des fichiers HTML et JS. Faites le tour de ce qui fonctionne et de ce qui ne fonctionne pas.

## Étape 2

Au boulot!

Fixez les bugs, et nettoyez un peu cette code base.

## Étape 3

Le code source contient une note “TODO”. Le développeur à laissé une note pour developper une fonctionnalité pour plus tard.
Ajoutez la fonctionnalité manquante.

## Étape 4

Écrivez des tests.

## Annexes:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Motus</title>
  </head>
  <body>
     <input id="word" />
     <button onclick="guess()">Ok</button>
     <p id="try"></p>
     <p id="well"></p>
     <p id="miss"></p>
     <p id="not"></p>
     <p id="win"></p>
  </body>
</html>
```

```jsx
function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayBase.length-1; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        missplaced.push(arrayWord[i])
      }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length) {
	  document.getElementById("win").innerText = 'Vous avez gagné'
  }

```

Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)
