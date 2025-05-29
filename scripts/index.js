const texts = [
    "Frontend Web Developer",
    "Photographer",
    "Videographer",
    "Graphic Designer",
    "Professional Teacher"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const textElement = document.getElementById('changing-text');

function type() {
    if (!textElement) return;

    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            erase();
        }, 1500);
    } else {
        setTimeout(type, 100);
    }
}

function erase() {
    letter = currentText.slice(0, --index);
    textElement.textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 50);
    }
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-toggle]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-toggle");
      const targetEl = document.getElementById(targetId);

      // Close all sections first
      document.querySelectorAll("[id$='-info']").forEach(section => {
        if (section !== targetEl) {
          section.classList.remove("max-h-screen");
          section.classList.add("max-h-0");
        }
      });

      // Toggle the clicked one
      if (targetEl.classList.contains("max-h-0")) {
        targetEl.classList.remove("max-h-0");
        targetEl.classList.add("max-h-screen"); // Enough room for content
      } else {
        targetEl.classList.remove("max-h-screen");
        targetEl.classList.add("max-h-0");
      }
    });
  });
});



// click on text to pop out inside images
function toggleImages(id) {
  // getting element id from the targetted id in the html
  const section = document.getElementById(id);
  //max-h-0: Collapse height.
  section.classList.toggle('max-h-0');
  //max-h-[500px]: Expands to show.
  section.classList.toggle('max-h-[500px]');
  //opacity-0: Make it invisible.
  section.classList.toggle('opacity-0');
  //opacity-100: Fades in with transition-all
  section.classList.toggle('opacity-100');
}

document.addEventListener('click', toggleImages);


