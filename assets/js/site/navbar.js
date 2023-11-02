// Add class by button click
const classesToAddOnClick = [
    { button: "btn-mobile", element: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", element: "menu-searth", className: "is-block" },
    { button: "btn-mobile", element: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", element: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", element: "menu-mobile-wrapper", className: "is-flex" }
];

for (let classToAddOnClick of classesToAddOnClick) {
    addClassByClick(classToAddOnClick.button, classToAddOnClick.element, classToAddOnClick.className);
}

// Add class by window scroll
const classesToAddByScroll = [
    { element: "navbar", className: "is-fixed", time: 100 }
];

for (let classToAddByScroll of classesToAddByScroll) {
    addClassOnScrollEvent(classToAddByScroll.element, classToAddByScroll.className, classToAddByScroll.time);
}