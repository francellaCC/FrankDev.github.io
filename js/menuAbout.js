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
    title: "Educación",
    id: "education",
    content: (
      '<ul class="list-disc pl-2">' +
      '<li>Informática y Tecnología Multimedia, UCR</li>' +
      '</ul>'
    ),
  },
  {
    title: "Herramientas",
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

document.addEventListener("DOMContentLoaded", function () {
  // const typedText = document.getElementById("typed-text");
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");


  // Código para el menú dinámico
  let activeElement = null;

  // Generar dinámicamente el menú
  TAB_DATA.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.className = "menu_link"
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