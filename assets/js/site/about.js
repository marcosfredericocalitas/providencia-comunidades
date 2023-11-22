const collapse = document.querySelectorAll(".c-collapse__wrapper");

collapse.forEach(collapseButton => {
    const button = collapseButton

    button.addEventListener("click", () => {
        button.classList.toggle("is-visible");
        console.log(button);
    });

    button.addEventListener("mouseleave", () => {
        button.classList.remove("is-visible");
        console.log(button);
    });
});