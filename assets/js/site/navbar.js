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
    addClassByClick(classToAddOnClick.button, classToAddOnClick.element, classToAddOnClick.className);
}

// Array of classes to be added on window scroll
const classesToAddByScroll = [
    { element: "navbar", className: "is-fixed", time: 100 }
];

// Add classes on window scroll
for (let classToAddByScroll of classesToAddByScroll) {
    addClassOnScrollEvent(classToAddByScroll.element, classToAddByScroll.className, classToAddByScroll.time);
}