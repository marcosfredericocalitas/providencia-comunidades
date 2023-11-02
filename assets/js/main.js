// Add class by click
function addClassByClick(button, element, className) {
    const buttonId = document.getElementById(button);
    const elementId = document.getElementById(element);

    buttonId.addEventListener("click", () => {
        elementId.classList.toggle(className);
    });
}

// Add class by window scroll
function addClassByScroll(element, className, time) {
    let windowScroll = window.scrollY;
    const elementId = document.getElementById(element);
    let shouldAddClass = windowScroll > time;

    elementId.classList.toggle(className, shouldAddClass);

}

function addClassOnScrollEvent(element, classList, time) {
    window.addEventListener("scroll", () => {
        addClassByScroll(element, classList, time);
    });
}
