const addClasses = [
    { button: "btn-mobile", domElement: "menu-mobile", className: "is-flex" },
    { button: "btn-mobile", domElement: "menu-searth", className: "is-flex" },
    { button: "btn-mobile", domElement: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", domElement: "icon-menu-mobile-close", className: "is-none" }
];

for (let addClass of addClasses) {
    addClassByClick(addClass.button, addClass.domElement, addClass.className);
}

