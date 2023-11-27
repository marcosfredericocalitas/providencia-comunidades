// Open and close collapse
function addClasseOncollapse(collapseClass) {
    const collapses = document.querySelectorAll(collapseClass);

    collapses.forEach(collapse => {
        collapse.addEventListener("click", () => {
            collapses.forEach(otherCollapse => {
                if (otherCollapse !== collapse) {
                    otherCollapse.classList.remove("is-visible");
                }
            });

            collapse.classList.toggle("is-visible");
        });
    });
}

addClasseOncollapse(".c-collapse__wrapper");
