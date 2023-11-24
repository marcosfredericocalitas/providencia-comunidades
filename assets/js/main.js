// Get window scroll Y  
function getWindowScrollY() {
    return {
        windowScroll: window.scrollY
    };
};

// Add a class on button click
function addClassByClick(button, element, className) {
    const buttonId = document.getElementById(button);
    const elementId = document.getElementById(element);

    buttonId.addEventListener("click", () => {
        elementId.classList.toggle(className);
    });
};

// Add a class on window scroll
function addClassByScroll(element, className, time) {
    const { windowScroll } = getWindowScrollY();
    const shouldAddClass = windowScroll > time;
    const elementId = document.getElementById(element);

    elementId.classList.toggle(className, shouldAddClass);
};

// Remove classes
function removeClassBy(element, classNam) {
    const windowWidth = window.innerWidth;
    const elementId = document.getElementById(element);

    if (windowWidth <= 1120) {
        elementId.classList.remove(classNam);
    }
};