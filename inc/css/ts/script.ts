const sections: (HTMLButtonElement | null)[] = [
  document.querySelector('.page-accueil'),
  document.querySelector('.premiere-page-question'),
  document.querySelector('.deuxieme-page-question'),
  document.querySelector('.troisieme-page-question'),
  document.querySelector('.quatrieme-page-question'),
  document.querySelector('.cinquieme-page-question'),
  document.querySelector('.fin-quiz')
];

const buttons: (HTMLButtonElement | null)[] = [
  document.querySelector('.container-button > #button-start'),
  document.querySelector('.container-button > #button-section1'),
  document.querySelector('.container-button > #button-section2'),
  document.querySelector('.container-button > #button-section3'),
  document.querySelector('.container-button > #button-section4'),
  document.querySelector('.container-button > #button-section5')
];

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  const section = sections[i];

  if (section !== null && button !== null) {
    button.addEventListener('click', () => {
      sections.forEach((s) => {
        if (s !== section) {
          section.style.display = 'none';
        }
      });

      section.style.display = 'flex';
    });
  }
}
