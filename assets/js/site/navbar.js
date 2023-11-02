// Add class by button click
const addClassesByClick = [
    { button: "btn-mobile", domElement: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", domElement: "menu-searth", className: "is-block" },
    { button: "btn-mobile", domElement: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", domElement: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", domElement: "menu-mobile-wrapper", className: "is-flex" }
];

for (let addClassOnClick of addClassesByClick) {
    addClassByClick(addClassOnClick.button, addClassOnClick.domElement, addClassOnClick.className);
}

// Add class by window scroll
const addClassesByScroll = [
    { element: "navbar", className: "is-fixed", time: 100 }
];

for (let addClassOnScroll of addClassesByScroll) {
    addClassOnScrollEvent(addClassOnScroll.element, addClassOnScroll.className, addClassOnScroll.time);
}