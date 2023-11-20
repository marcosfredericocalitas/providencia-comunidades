const collapse = document.querySelectorAll(".c-collapse__wrapper");

collapse.forEach(collapseButton => {
    collapseButton.addEventListener("click", () => {
        collapseButton.classList.toggle("is-visible");
    });

    collapseButton.addEventListener("focusout", () => {
        collapseButton.classList.remove("is-visible");
    });

});
