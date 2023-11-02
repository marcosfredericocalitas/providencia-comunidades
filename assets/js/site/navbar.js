// Add class by button click
const addClassesByClick = [
    { button: "btn-mobile", element: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", element: "menu-searth", className: "is-block" },
    { button: "btn-mobile", element: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", element: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", element: "menu-mobile-wrapper", className: "is-flex" }
];

for (let addClassOnClick of addClassesByClick) {
    addClassByClick(addClassOnClick.button, addClassOnClick.element, addClassOnClick.className);
}

// Add class by window scroll
const addClassesByScroll = [
    { element: "navbar", className: "is-fixed", time: 100 }
];

for (let addClassOnScroll of addClassesByScroll) {
    addClassOnScrollEvent(addClassOnScroll.element, addClassOnScroll.className, addClassOnScroll.time);
}