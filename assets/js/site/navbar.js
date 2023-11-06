// Array of classes to be added on button click
const classesToAddOnClick = [
    { button: "btn-mobile", element: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", element: "menu-searth", className: "is-block" },
    { button: "btn-mobile", element: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", element: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", element: "menu-mobile-wrapper", className: "is-flex" }
];

// Add classes on button click
for (let classToAddOnClick of classesToAddOnClick) {
    addClassByClick(
        classToAddOnClick.button,
        classToAddOnClick.element,
        classToAddOnClick.className
    );
}

// Array of classes to be added on window scroll
const classesToAddByScroll = [
    { element: "navbar", className: "is-fixed", time: 300 },
    { element: "navbar", className: "is-visible", time: 400 },
    { element: "menu-logo", className: "is-small", time: 300 },
    { element: "btn-scroll-top", className: "is-visible", time: 400 }
]

// Add classes on window scroll
window.addEventListener("scroll", () => {
    for (let classToAddByScroll of classesToAddByScroll) {
        addClassByScroll(
            classToAddByScroll.element,
            classToAddByScroll.className,
            classToAddByScroll.time
        );
    };
});

// Remove class by event
function removeClassByEvent(event) {
    window.addEventListener(event, () => {
        for (let i = 0; i < 4; i++) {
            classToRemoveByEvent = classesToAddByScroll[i];
            removeClassBy(classToRemoveByEvent.element, classToRemoveByEvent.className);
        }
    });
}

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