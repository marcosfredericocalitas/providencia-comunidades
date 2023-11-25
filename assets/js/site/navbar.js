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
};

// Array of classes to be added on window scroll
const classesToAddByScroll = [
    { element: "navbar", className: "is-fixed", time: 300 },
    { element: "navbar", className: "is-visible", time: 400 },
    { element: "menu-logo", className: "is-small", time: 300 },
    { element: "card-details", className: "is-fixed", time: 200 },
    { element: "card-details", className: "has-no-transition", time: 250 },
    { element: "card-details", className: "is-top", time: 400 },
    { element: "card-details", className: "is-not-fixed", time: 700 },
    { element: "card-details", className: "has-no-transition-2", time: 700 },
    { element: "section-content", className: "is-full", time: 700 },
    { element: "btn-scroll-top", className: "is-visible", time: 400 }
];

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
        for (let i = 0; i < 7; i++) {
            classToRemoveByEvent = classesToAddByScroll[i];
            removeClassBy(classToRemoveByEvent.element, classToRemoveByEvent.className);
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

// Next image 
function nextImage() {
    let counter = 1;
    const totalImages = 4;
    const slider = document.querySelector(".slider");

    setInterval(() => {
        counter++;
        if (counter > totalImages) {
            counter = 1;
        }
        slider.querySelector("#radio-" + counter).checked = true;
    }, 3000);
};

nextImage();