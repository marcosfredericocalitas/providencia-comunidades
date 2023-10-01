$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationsFunctionsCourse = [
        // Add student functions and params
        ["name", "nameErr", validateName],
        ["admin", "adminErr", validateAdmin],
        ["description", "descriptionErr", validateDescription],
        ["topics", "topicsErr", validateTopics],
        ["image", "imageErr", validateImage]
    ];

    validationsFunctionsCourse.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-add-course").click(function () {
        const isValidName = validateName("name", "nameErr");
        const isValidAdmin = validateAdmin("admin", "adminErr");
        const isValidDescription = validateDescription("description", "descriptionErr");
        const isValidTopics = validateTopics("topics", "topicsErr");
        const isValidImage = validateImage("image", "imageErr");


        if (!isValidName || !isValidAdmin || !isValidDescription || !isValidTopics || !isValidImage) {
            alert("Erro ao cadastrar Curso");
            return false;
        }

        alert("Curso cadastrado com sucesso");
        return false;
    });

    // Preview the image when selected
    previewImageBySelected("image", "previe-image");
});