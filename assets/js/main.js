// Add class by click
function addClassByClick(buttonId, elementId, className) {
    const button = document.getElementById(buttonId);
    const domElement = document.getElementById(elementId);

    button.addEventListener("click", () => {
        domElement.classList.toggle(className);
    });
}