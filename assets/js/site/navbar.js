// Array of classes to be added on button click
const classesToAddByClick = [
    { button: "btn-mobile", element: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", element: "menu-searth", className: "is-block" },
    { button: "btn-mobile", element: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", element: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", element: "menu-mobile-wrapper", className: "is-flex" }
];

// Add classes on button click
for (let object of classesToAddByClick) {
    addClassByClick(
        object.button,
        object.element,
        object.className
    );
};

// Array of classes to be added on window scroll
const classesToAddByEvent = [
    { element: "navbar", className: "is-fixed", time: 300 },
    { element: "navbar", className: "is-visible", time: 400 },
    { element: "menu-logo", className: "is-small", time: 300 },
    { element: "card-details", className: "is-fixed", time: 200 },
    { element: "card-details", className: "has-no-transition", time: 250 },
    { element: "card-details", className: "is-top", time: 400 },
    { element: "card-details", className: "is-not-fixed", time: 688 },
    { element: "card-details", className: "has-no-transition-2", time: 650 },
    { element: "section-content", className: "is-full", time: 688 },
    { element: "btn-scroll-top", className: "is-visible", time: 400 }
];

// Add classes on window scroll
window.addEventListener("scroll", () => {
    for (let object of classesToAddByEvent) {
        addClassByScroll(
            object.element,
            object.className,
            object.time
        );
    };
});

// Remove class by event
function removeClassByEvent(event) {
    window.addEventListener(event, () => {
        for (let i = 0; i < 9; i++) {
            let arrayObject = classesToAddByEvent[i];
            removeClassBy(arrayObject.element, arrayObject.className);
        }
    });
};

removeClassByEvent("resize");
removeClassByEvent("scroll");

//Scroll the window to the top by button click
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const scrollTopBtn = document.getElementById("btn-scroll-top");
scrollTopBtn.addEventListener("click", scrollToTop);