const addClasses = [
    { button: "btn-mobile", domElement: "menu-mobile", className: "is-flex" },
    { button: "btn-mobile", domElement: "menu-searth", className: "is-flex" }
];

for (let addClass of addClasses) {
    addClassByClick(addClass.button, addClass.domElement, addClass.className);
}

