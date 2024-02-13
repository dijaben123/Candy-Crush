import Grille from "./grille.js";

// 1 On définisse une sorte de "programme principal"
// le point d'entrée du code qui sera appelée dès que la
// page ET SES RESSOURCES est chargée

window.onload = init;

let grille;

function init() {
  console.log("Page et ressources prêtes à l'emploi");
  // appelée quand la page et ses ressources sont prêtes.
  // On dit aussi que le DOM est ready (en fait un peu plus...)

  grille = new Grille(9, 9);
  grille.showCookies();

// Définition de la fonction qui sera appelée toutes les 500 secondes (500000 millisecondes)
function verifierEtMettreAJour() {
  grille.testAlignementDansTouteLaGrille();
  grille.slide();
  grille.showCookies();
  // Ajoutez d'autres fonctions ici si nécessaire
}

// Appel de la fonction toutes les 500 secondes (500000 millisecondes)
setInterval(verifierEtMettreAJour, 5);

  }
