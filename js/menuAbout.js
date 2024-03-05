const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      '<ul class="list-disc pl-2 skills_list">' +
      '<li>Node.js</li>' +
      '<li>Express</li>' +
      '<li>PostgreSQL</li>' +
      '<li>Sequelize</li>' +
      '<li>JavaScript</li>' +
      '<li>React</li>' +
      '</ul>'
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      '<ul class="list-disc pl-2">' +
      '<li>Fullstack Academy of Code</li>' +
      '<li>University of California, Santa Cruz</li>' +
      '</ul>'
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      '<ul class="list-disc pl-2">' +
      '<li>Visual Studio Code</li>' +
      '<li>Figma</li>' +
      '<li>Git</li>' +
      '<li>Github</li>' +
      '</ul>'
    ),
  },
];
// Nuevo array para la máquina de escribir
// const textArray = [
//   "Francella",
//   "Web Developer",
//   "Front-end Developer"
// ];


document.addEventListener("DOMContentLoaded", function () {
  // const typedText = document.getElementById("typed-text");
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");


  // let wordIndex = 0;
  // let letterIndex = 0;

  // function type() {
  //   const currentWord = textArray[wordIndex];
  //   const currentLetter = currentWord[letterIndex];

  //   typedText.textContent += currentLetter;

  //   letterIndex++;

  //   if (letterIndex < currentWord.length) {
  //     setTimeout(type, 150); // Espera antes de escribir la siguiente letra
  //   } else {
  //     setTimeout(clearAndTypeNext, 1000); // Espera antes de borrar y pasar a la siguiente palabra
  //   }
  // }

  // function clearAndTypeNext() {
  //   setTimeout(() => {
  //     clearText();
  //     wordIndex = (wordIndex + 1) % textArray.length;
  //     letterIndex = 0;
  //     type();
  //   }, 500);
  // }

  // function clearText() {
  //   typedText.textContent = "";
  // }

  // type();

  // Código para el menú dinámico
  let activeElement = null;

  // Generar dinámicamente el menú
  TAB_DATA.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.addEventListener("click", () => showContent(item, li));
    menu.appendChild(li);

    // Activar el elemento "Skills" al cargar la página
    if (item.title === "Skills") {
      showContent(item, li);
    }
  });

  // Función para mostrar el contenido correspondiente al hacer clic en un elemento del menú
  function showContent(item, clickedElement) {
    // Desactivar el elemento previamente activo
    if (activeElement) {
      activeElement.classList.remove("active");
    }

    // Activar el nuevo elemento
    clickedElement.classList.add("active");
    activeElement = clickedElement;

    content.innerHTML = item.content;
  }
});