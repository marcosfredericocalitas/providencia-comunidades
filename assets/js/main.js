// Add a class on button click
function addClassByClick(button, element, className) {
    const buttonId = document.getElementById(button);
    const elementId = document.getElementById(element);

    buttonId.addEventListener("click", () => {
        elementId.classList.toggle(className);
    });
};

// Add a class on window scroll
function addClassByScroll(elementId, className, time, type) {
    const windowScroll = window.scrollY;
    const windowWidth = window.innerWidth;
    const shouldAddClass = windowScroll > time;
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element with id "${elementId}" not found.`);
        return false;
    }

    switch (type) {
        case "full":
            element.classList.toggle(className, shouldAddClass);
            break;

        case "not-full":
            if (windowWidth >= 1050) {
                element.classList.toggle(className, shouldAddClass);
            } else {
                element.classList.remove(className);
            }
            break;

        default:
            console.error("Invalid type provided.");
            return false;
    }

    return true;
}