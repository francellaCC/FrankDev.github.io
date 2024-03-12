// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.classList.add("is-in-viewport");
//     }
//   });
// }, {
//   threshold: 0.5, // Umbral de intersección
// });

// // observer.observe(document.querySelectorAll(".card_proyects"));

// const tarjetas = document.querySelectorAll(".card_proyects");
// tarjetas.forEach((tarjeta) => {
//   observer.observe(tarjeta);
// });



const tarjetas = document.querySelectorAll(".card_proyects");

const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada, index) => {
    if (entrada.isIntersecting) {
      setTimeout(() => {
        entrada.target.classList.add('visible');
      }, index * 100); // Aplica un retraso creciente a cada tarjeta (ajusta el valor según sea necesario)
      //           
    }
  });
}

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
});

tarjetas.forEach((tarjeta) => {
  observador.observe(tarjeta);
});
