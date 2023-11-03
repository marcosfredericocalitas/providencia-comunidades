// Add a class on button click
function addClassByClick(button, element, className) {
    const buttonId = document.getElementById(button);
    const elementId = document.getElementById(element);

    buttonId.addEventListener("click", () => {
        elementId.classList.toggle(className);
    });
}

// Add a class on window scroll
function addClassByScroll(element, className, time) {
    const windowScroll = window.scrollY;
    const shouldAddClass = windowScroll > time;
    const elementId = document.getElementById(element);

    elementId.classList.toggle(className, shouldAddClass);
}