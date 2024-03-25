import Grille from "./grille.js";

// Définition des variables globales
let grille;
let chronometerStarted = false;

// Fonction principale d'initialisation
window.onload = init;

function init() {
  console.log("Page et ressources prêtes à l'emploi");

  // Initialisation de la grille
  grille = new Grille(9, 9);
  grille.showCookies();
  updateScoreAndNiveauOnPage(); // Mise à jour du score et du niveau initiaux

  // Vérification des alignements et glissement initial
  checkAlignmentsAndSlide();

  // Exécution des instructions de clic à intervalles réguliers
  setInterval(() => {
    checkAlignmentsAndSlide();
  }, 500); // Répéter toutes les 0.5 secondes
}

// Fonction pour vérifier les alignements et glisser les cookies
function checkAlignmentsAndSlide() {
  let isAlignement = grille.testAlignementDansTouteLaGrille();

  // Vérifier si le chronomètre n'est pas déjà en cours
  if (!chronometerStarted) {
    grille.startChronometer();
    chronometerStarted = true;
  }

  if (isAlignement) {
    grille.slide();
    updateScoreAndNiveauOnPage(); // Mise à jour du score et du niveau après le glissement
    grille.showCookies(); // Afficher les cookies après le glissement
  }
}

// Fonction pour mettre à jour le score et le niveau sur la page
function updateScoreAndNiveauOnPage() {
  updateScoreOnPage();
  updateNiveauOnPage();
}

// Fonction pour mettre à jour le score sur la page
function updateScoreOnPage() {
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = grille.getScore();
}

// Fonction pour mettre à jour le niveau sur la page
function updateNiveauOnPage() {
  let niveauElement = document.getElementById("niveau");
  niveauElement.textContent = `Niveau : ${grille.getNiveau()}`;
}
