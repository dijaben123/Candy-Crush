# Game

Bienvenue dans notre jeu Ce jeu est basé sur le concept de Candy Crush , où le joueur doit aligner au moins trois cookies du même type pour les faire disparaître et gagner des points.

## Installation

1. Clonez le dépôt : `git clone https://github.com/dijaben123/candy_crash2.git`
2. Ouvrez le fichier `index.html` dans votre navigateur préféré.

## Comment jouer

- L'objectif du jeu est d'obtenir le meilleur score possible en alignant les cookies.
- Cliquez sur un cookie pour le sélectionner.
- Cliquez sur un autre cookie adjacent pour les échanger et créer des alignements.
- Faites glisser les cookies pour les échanger.

## Fonctionnalités

- **Alignements:** Gagnez des points en alignant au moins trois cookies du même type horizontalement ou verticalement.
- **Score Incrémental:** Le score augmente en fonction de la longueur des alignements. Plus l'alignement est long, plus le score est élevé.
- **Séquences de Chutes à la Chaîne:** Si un nouvel alignement est créé après une première série de chutes, le score est multiplié.

## Structure du Code

- `index.html`: Fichier HTML principal.
- `main.js`: Logique principale du jeu.
- `cookie.js`: Définition de la classe Cookie.
- `utils.js`: Fonctions utilitaires.

## Développement

- Le code est écrit en JavaScript et utilise des fonctionnalités modernes du langage.
- La grille est générée avec des cookies aléatoires au début du jeu.
- Le code est commenté pour faciliter la compréhension et l'extension du jeu.

# Cookie Crunch 

Bienvenue dans Cookie Crunch, un jeu de type Match-3 où l'objectif est d'aligner des cookies identiques pour gagner des points.

## Fonctions Principales

### `fillHiddenColumnsAndRows()`

Cette fonction remplit les colonnes cachées et les lignes cachées avec de nouveaux cookies aléatoires lorsque des cookies sont cachés.

### `slide()`

La fonction `slide` est responsable du glissement des cookies vers le bas. Elle parcourt la grille pour déplacer les cookies cachés vers les positions visibles et met à jour les attributs des images des cookies en conséquence.

### `updateTimeOnPage()`

Cette fonction met à jour l'affichage du temps sur la page en fonction du temps de jeu actuel.

### `startChronometer()`

Cette fonction démarre un chronomètre qui incrémente le temps de jeu chaque seconde.

### `changerNiveau()`

Cette fonction gère le changement de niveau du jeu en augmentant le niveau et en ajustant le nombre de cookies par niveau.

### `updateScoreOnPage()`

Cette fonction met à jour le score affiché sur la page et vérifie si le joueur atteint un score spécifique pour passer au niveau suivant.

 Amusez-vous à jouer à Cookie Crunch!
