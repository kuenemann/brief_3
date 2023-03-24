/* appel des sections  */

const section0: HTMLButtonElement | null =document.querySelector(".page-accueil");
const section1: HTMLButtonElement | null = document.querySelector(".premiere-page-question");
const section2: HTMLButtonElement | null = document.querySelector(".deuxieme-page-question");
const section3: HTMLButtonElement | null = document.querySelector(".troisieme-page-question");
const section4: HTMLButtonElement | null = document.querySelector(".quatrieme-page-question");
const section5: HTMLButtonElement | null = document.querySelector(".cinquieme-page-question");
const section6: HTMLButtonElement | null = document.querySelector(".fin-quiz");

/* appel des boutons  */
const Bouton1: HTMLButtonElement | null = document.querySelector(".container-button > #button-start");
const Bouton2: HTMLButtonElement | null = document.querySelector(".container-button > #button-section1");
const Bouton3: HTMLButtonElement | null = document.querySelector(".container-button > #button-section2");
const Bouton4: HTMLButtonElement | null = document.querySelector(".container-button > #button-section3");
const Bouton5: HTMLButtonElement | null = document.querySelector(".container-button > #button-section4");
const Bouton6: HTMLButtonElement | null = document.querySelector(".container-button > #button-section5");
const boutonFinQuiz: HTMLButtonElement | null = document.querySelector(".container-button > #button-section6");

/* liste des réponses possibles ? */
const reponse_A: NodeListOf<Element> | null =document.querySelectorAll(".reponse_A");
const reponse_B: NodeListOf<Element> | null =document.querySelectorAll(".reponse_B");
const reponse_C: NodeListOf<Element> | null =document.querySelectorAll(".reponse_C");
const reponse_D: NodeListOf<Element> | null =document.querySelectorAll(".reponse_D");

const reponses: (NodeListOf<Element> | null)[] = [reponse_A,reponse_B,reponse_C,reponse_D,];

/* input récupération joueur */

const joueur: Element | null = document.querySelector("#joueur");

/* affichage de la section question 1 en appuyant sur le bouton start */

if (
  section0 !== null &&
  Bouton1 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
  ) {
  Bouton1.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "flex";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
  });
}


/* affichage de la section question 2 en appuyant sur le bouton question 1 */

if (
  section0 !== null &&
  Bouton2 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
) {
  Bouton2.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "flex";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
  });
}

/* affichage de la section question 3 en appuyant sur le bouton question 2 */

if (
  section0 !== null &&
  Bouton3 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
) {
  Bouton3.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "flex";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
  });
}

/* affichage de la section question 4 en appuyant sur le bouton question 3 */

if (
  section0 !== null &&
  Bouton4 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
) {
  Bouton4.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "flex";
    section5.style.display = "none";
    section6.style.display = "none";
  });
}

/* affichage de la section question 5 en appuyant sur le bouton question 4 */

if (
  section0 !== null &&
  Bouton5 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
) {
  Bouton5.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "flex";
    section6.style.display = "none";
  });
}

/* affichage de la section question 6 en appuyant sur le bouton question 5 */

if (
  section0 !== null &&
  Bouton6 !== null &&
  section1 !== null &&
  section2 !== null &&
  section3 !== null &&
  section4 !== null &&
  section5 !== null &&
  section6 !== null
) {
  Bouton6.addEventListener("click", () => {
    section0.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "flex";
  });
}

for (const reponse of reponses) {
  if (reponse) {
    for (const possibilite of reponse) {
      possibilite.addEventListener("click", (event) => {
        console.log("Réponse sélectionnée");
        if (event.target instanceof HTMLElement) {
          if (event.target.classList.contains("selected")) {
            // Si la réponse est déjà sélectionnée, la désélectionner
            event.target.classList.remove("selected");
          } else {
            // Sinon, désélectionner toutes les autres réponses et sélectionner celle-ci
            for (const otherPossibilite of reponse) {
              otherPossibilite.classList.remove("selected");
            }
            event.target.classList.add("selected");
          }
        }
      });
    }
  }
}

 // Recharger la page pour renvoyer l'utilisateur à la page d'accueil

 boutonFinQuiz?.addEventListener("click", () => {
  location.reload();
} )
 
