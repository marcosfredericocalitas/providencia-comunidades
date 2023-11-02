// Add class by click
function addClassByClick(button, domElement, className) {
    const buttonId = document.getElementById(button);
    const elementId = document.getElementById(domElement);

    buttonId.addEventListener("click", () => {
        elementId.classList.toggle(className);
    });
}
