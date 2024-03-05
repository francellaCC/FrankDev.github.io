document.addEventListener('DOMContentLoaded', function () {
  const textArray = [
    "Francella",
    "Web Developer",
    "Front-end Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = textArray[textIndex];
    const textElement = document.getElementById('text');

    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
      isDeleting = true;
      setTimeout(function () {
        type();
      }, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex++;
      if (textIndex === textArray.length) {
        textIndex = 0;
      }
      setTimeout(function () {
        type();
      }, 500);
    } else {
      setTimeout(function () {
        type();
      }, 100);
    }
  }

  type();
});