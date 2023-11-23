// Collapse function 
function addClasseOncollapse(collapseClass) {
    const collapse = document.querySelectorAll(collapseClass);

    collapse.forEach(collapseButton => {
        collapseButton.addEventListener("click", () => {
            // Remove a classe "is-visible" de todos os elementos
            collapse.forEach(element => {
                element.classList.remove("is-visible");
            });

            // Adiciona a classe "is-visible" apenas ao elemento clicado
            collapseButton.classList.toggle("is-visible");
        });
    });
}

addClasseOncollapse(".c-collapse__wrapper");