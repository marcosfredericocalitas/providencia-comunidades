// Array of classes to be added on window scroll
const addClassesOnScroll = [
    { element: "card-details", className: "is-fixed", time: 195 },
    { element: "card-details", className: "has-transition", time: 200 },
    { element: "card-details", className: "is-top", time: 400 },
    { element: "card-details", className: "has-no-transition-2", time: 650 },
    { element: "card-details", className: "is-not-fixed", time: 1568 },
    { element: "section-content", className: "is-full", time: 1568 },
    { element: "main-item", className: "has-gap", time: 1568 },
    { element: "main-content-course", className: "u-relative", time: 1568 }
];

// Add classes on window scroll
window.addEventListener("scroll", () => {
    for (let addClassOnScroll of addClassesOnScroll) {
        addClassOnScroll(
            addClassOnScroll.element,
            addClassOnScroll.className,
            addClassOnScroll.time
        );
    };
});